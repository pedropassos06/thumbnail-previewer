<template>
    <div class="video-thumbnail-component">
        <img class="video-thumbnail" :src="video.thumbnail" :alt="video.title">
        <div class="video-info-wrapper">
            <img class="profile-picture" :src="video.channelProfilePic" :alt="video.channelName">
            <div class="video-info">
                <h3 class="title">{{ video.title }}</h3>
                <div class="channel-name-and-video-info-container">
                    <span>{{ video.channelName }}</span>
                    <div class="video-analytics">
                        <span>{{ video.views }} views</span>
                        <span> • </span>
                        <span>{{ video.uploadedWhen }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FullYoutubeThumbnail",
    props: {
        video: {
            type: Object,
            required: true,
        }
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
    content: "";
}

.profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: lightgray;
    content: "";
}
</style>
