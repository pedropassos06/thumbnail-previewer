<template>
    <div class="video-thumbnail-component">
        <img v-if="selectedThumbnail" :src="selectedThumbnail.url" class="video-thumbnail">
        <div class="video-info-wrapper">
            <img class="profile-picture">
            <div class="video-info">
                <h3 class="title">Your Title Here</h3>
                <div class="channel-name-and-video-info-container">
                    <span>Your Channel Here</span>
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

export default {
    name: "YourYoutubeThumbnail",
    computed: {
        ...mapGetters(["getSelectedThumbnail"]),
        selectedThumbnail() {
            return this.getSelectedThumbnail;
        },
    },
    mounted() {
        console.log(this.selectedThumbnail);
    }
}
</script>

<style>
.video-thumbnail-component {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    max-width: calc(80% - 20px);
    padding: 10px;
    box-sizing: border-box;
    width: fit-content;
}

.video-info-wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
}

.video-info {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.channel-name-and-video-info-container {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #606060;
    font-weight: 500;
    width: 100%;
}

.title {
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    text-wrap: wrap;
    text-decoration: none;
    line-height: 1.2;
}

.video-thumbnail {
    aspect-ratio: 16 / 9;
    background: lightgray;
    border-radius: 10px;
    width: 100%;
}

.profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: lightgray;
}
</style>
