<template>
    <div class="your-channel-section">
        <SectionTitle>Your Channel</SectionTitle>
        <div class="your-channel-section-wrapper">
            <InputBox type="text" placeholder="ex: @pedropassos_" v-model="channelModel" />
            <ActionButton 
                width="100%"
                backgroundColor="#FF0000" 
                textColor="#FFFFFF" 
                stroke="#FF0000" 
                hasDropShadow
                @click="searchChannel"
            >Search my channel
            </ActionButton>
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
            channelModel: '',
            channelName: '',
            profilePic: '',
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
            if (!this.channelModel) {
                alert('Please enter a channel handle');
                return;
            }

            // Fetch channel data
            try {
                this.channelName = await this.getChannelName();
                this.profilePic = await this.getProfilePic();
                
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
        async getChannelName() {
            // hit endpoint and return channel name
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Ftitle&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&forHandle=${this.channelModel}`);
                if (!response.ok) {
                    throw new Error(`Error fetching channel name: ${response.status}`);
                }
                const data = await response.json();
                return data.items[0].snippet.title;
            } catch (error) {
                console.error("API Error:", error);
                return '';
            }
        },
        async getProfilePic() {
            // hit endpoint and return profile pic
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&forHandle=${this.channelModel}`);
                if (!response.ok) {
                    throw new Error(`Error fetching profile pic: ${response.status}`);
                }
                const data = await response.json();
                return data.items[0].snippet.thumbnails.default.url;
            } catch (error) {
                console.error("API Error:", error);
                return '';
            }
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
</style>