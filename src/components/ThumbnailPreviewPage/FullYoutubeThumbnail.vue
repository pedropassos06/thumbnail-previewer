<template>
    <div class="video-thumbnail-component">
        <img class="video-thumbnail" :src="video.thumbnail" :alt="video.title">
        <div class="video-info-wrapper">
            <img class="profile-picture" :src="video.channelProfilePic" :alt="video.channelName">
            <div class="video-info">
                <h3 class="title">{{ video.title }}</h3>
                <h3 class="channel-name">{{ video.channelName }}</h3>
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
    max-width: 70%;
    padding: 10px;
    box-sizing: border-box;
}

.video-info-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
}

.video-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.title {
    font-size: 1.2rem;
    font-weight: bold;
    width: 80%;
    text-wrap: wrap;
}

.channel-name {
    font-size: 1rem;
    color: #606060;
    font-weight: 500;
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
}
</style>
