<template>
    <div class="your-channel-section">
        <SectionTitle>Your Channel</SectionTitle>
        <div class="your-channel-section-wrapper">
            <InputBox type="text" placeholder="ex: @pedropassos_" v-model="channelHandle" />
            <ActionButton 
                width="100%"
                backgroundColor="#FF0000" 
                textColor="#FFFFFF" 
                stroke="#FF0000" 
                hasDropShadow
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
import SectionTitle from '@/components/SectionTitle.vue';
import InputBox from '@/components/InputBox.vue';
import ActionButton from '@/components/ActionButton.vue';
import { mapActions } from 'vuex';

export default {
    name: "YourChannelSection",
    data() {
        return {
            channelHandle: '',
            channelName: '',
            profilePic: '',
            tooManyRequests: false,  // Add a flag for rate limiting
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
            // Check if the user has entered a channel handle
            if (!this.channelHandle) {
                alert('Please enter a channel handle');
                return;
            }

            // Fetch channel data
            try {
                const channelData = await this.getChannelData();
                this.channelName = channelData.channel_name;
                this.profilePic = channelData.channel_profile_pic;
                
                if (!this.channelName) {
                    alert('Channel not found');
                    return;
                }

                // update channel name
                this.setChannelName(this.channelName);

                // update profile pic
                this.setChannelProfilePic(this.profilePic);

            } catch (error) {
                console.error("API Error:", error);
            }
        },
        async getChannelData() {
            // call backend
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/channel?handle=${this.channelHandle}`);
                if (!response.ok) {
                    if (response.status === 429) {
                        // Handle rate-limited requests specifically
                        this.tooManyRequests = true; // Set the flag to true
                        return null; // or throw an error to be caught later
                    }
                    throw new Error(`Error fetching channel data: ${response.status}`);
                }
                const data = await response.json();
                this.tooManyRequests = false; // Reset flag if the request is successful
                return data;
            } catch (error) {
                console.error("API Error:", error);
                return '';
            }
        },
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
