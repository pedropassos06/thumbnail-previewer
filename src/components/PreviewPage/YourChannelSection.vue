<template>
    <div class="your-channel-section">
        <SectionTitle>Your Channel</SectionTitle>
        <div class="your-channel-section-wrapper">
            <InputBox type="text" placeholder="ex: @pedropassos_" v-model="channelHandle" />
            <ActionButton 
                type="primary"
                :disabled="tooManyRequests"
                @click="searchChannel"
            >Search my channel</ActionButton>
        </div>
        <!-- Display message if too many requests are made -->
        <div v-if="tooManyRequests" class="error-message">
            You have reached the rate limit. Please try again later.
        </div>
    </div>
</template>

<script>
import SectionTitle from '@/components/UI/SectionTitle.vue';
import InputBox from '@/components/UI/InputBox.vue';
import ActionButton from '@/components/UI/ActionButton.vue';
import { mapActions } from 'vuex';

export default {
    name: "YourChannelSection",
    data() {
        return {
            channelHandle: '',
            tooManyRequests: false,
            cacheExpiryHours: 24,  // Define cache expiration time
        }
    },
    components: {
        SectionTitle,
        InputBox,
        ActionButton,
    },
    methods: {
        ...mapActions('channel', ['setChannelName', 'setChannelProfilePic']),

        async searchChannel() {
            if (!this.channelHandle) {
                alert('Please enter a channel handle');
                return;
            }

            // Check local storage before making an API request
            const cachedData = this.getCachedChannelData(this.channelHandle);
            if (cachedData) {
                this.updateChannelData(cachedData);
                return;
            }

            // Fetch channel data from API
            try {
                const channelData = await this.getChannelData();

                if (this.tooManyRequests) return;
                
                if (!channelData || !channelData.channel_name || !channelData.channel_profile_pic) {
                    alert('Channel not found');
                    return;
                }

                // Cache the response
                this.cacheChannelData(this.channelHandle, channelData);

                // Update Vuex state
                this.updateChannelData(channelData);

            } catch (error) {
                console.error("API Error:", error);
            }
        },

        async getChannelData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/channel?handle=${this.channelHandle}`);
                if (!response.ok) {
                    if (response.status === 429) {
                        this.tooManyRequests = true;
                        return null;
                    }
                    throw new Error(`Error fetching channel data: ${response.status}`);
                }
                const data = await response.json();
                this.tooManyRequests = false;
                return data;
            } catch (error) {
                console.error("API Error:", error);
                return null;
            }
        },

        // update vuex state with fetched data
        updateChannelData(channelData) {
            this.setChannelName(channelData.channel_name);
            this.setChannelProfilePic(channelData.channel_profile_pic);
        },

        // Store fetched data in localStorage with a timestamp
        cacheChannelData(handle, data) {
            const cacheEntry = {
                data,
                timestamp: new Date().getTime(),
            };
            localStorage.setItem(`channelData_${handle}`, JSON.stringify(cacheEntry));
        },

        // Retrieve cached data if it exists and is still valid
        getCachedChannelData(handle) {
            const cacheEntry = localStorage.getItem(`channelData_${handle}`);
            if (!cacheEntry) return null;

            const { data, timestamp } = JSON.parse(cacheEntry);
            const now = new Date().getTime();
            const expiryTime = this.cacheExpiryHours * 60 * 60 * 1000; // Convert hours to milliseconds

            if (now - timestamp > expiryTime) {
                // Data is expired, remove it
                localStorage.removeItem(`channelData_${handle}`);
                return null;
            }
            return data;
        }
    },
}
</script>


<style>
.your-channel-section {
    width: 100%;
    color: black;
}

.your-channel-section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.error-message {
    padding: 4px;
    color: red;
    font-size: 14px;
    font-weight: bold;
}
</style>
