<template>
    <div class="video-thumbnail-component">
        <div class="thumbnail-wrapper">
            <img v-if="selectedThumbnail" :src="selectedThumbnail.url" class="video-thumbnail">
            <img v-else :src="blankThumbnail" class="video-thumbnail">
            <div class="video-duration">{{ videoDuration }}</div>
        </div>
        <div class="video-info-wrapper">
            <img class="profile-picture" :src="profilePic">
            <div class="video-info">
                <h3 class="title">{{ selectedTitle }}</h3>
                <div class="channel-name-and-video-info-container">
                    <span>{{ channelName }}</span>
                    <div class="video-analytics">
                        <span>10K views</span>
                        <span> • </span>
                        <span>1 hour ago</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import blankThumbnail from '@/assets/mock/blank-thumbnail.png';

export default {
    name: "YourYoutubeThumbnail",
    data() {
        return {
            blankThumbnail
        };
    },
    computed: {
        ...mapGetters('thumbnails', ["getSelectedThumbnail"]),
        ...mapGetters('channel', ["getChannelName", "getChannelProfilePic"]),
        ...mapGetters('titles', ["getSelectedTitle"]),
        selectedThumbnail() {
            return this.getSelectedThumbnail;
        },
        selectedTitle() {
            const maxLength = window.innerWidth < 768 ? 50 : 70; // Mobile: 50 chars, Desktop: 70 chars
            const title = this.getSelectedTitle || "Your Video Title Here";

            if (title.length <= maxLength) return title;

            // Find the last space before the cutoff
            let truncated = title.slice(0, maxLength);
            let lastSpaceIndex = truncated.lastIndexOf(" ");

            // If there's a space, cut at the last whole word; otherwise, use maxLength
            if (lastSpaceIndex > 0) {
                truncated = truncated.slice(0, lastSpaceIndex);
            }

            return truncated + "...";
        },
        channelName() {
            return this.getChannelName || 'Your Channel Here';
        },
        profilePic() {
            return this.getChannelProfilePic || '';
        },
        videoDuration() {
            return this.selectedThumbnail ? '10:01' : '0:00';
        }
    },
}
</script>

<style>
.video-thumbnail-component {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.video-info-wrapper {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
}

.thumbnail-wrapper {
    position: relative;
    width: 100%;
}

.video-info {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.channel-name-and-video-info-container {
    font-size: 0.90rem;
    color: #606060;
    font-weight: 500;
}

.title {
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    text-wrap: wrap;
    text-decoration: none;
    margin-bottom: 5px;
}

.video-thumbnail {
    aspect-ratio: 16 / 9;
    border-radius: 10px;
    width: 100%;
}

.profile-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: lightgray;
}

.video-duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 4px;
}
</style>
