<template>
    <div :href="video.url" class="video-thumbnail-component">
        <div class="thumbnail-wrapper">
            <img class="video-thumbnail" :src="video.thumbnail" :alt="video.title">
            <div class="video-duration">{{ video.duration }}</div>
        </div>
        <div class="video-info-wrapper">
            <img class="profile-picture" :src="video.channelProfilePic" :alt="video.channelName">
            <div class="video-info">
                <h3 class="title">{{ video.title }}</h3>
                <div class="channel-name-and-video-info-container">
                    <span class="channel-name">{{ video.channelName }}</span>
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
}

.thumbnail-wrapper {
    position: relative;
    width: 100%;
}

.video-thumbnail {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.video-duration {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 4px;
}

.video-info-wrapper {
    display: flex;
    gap: 10px;
    align-items: flex-start;
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
    font-size: 0.85rem;
    color: #606060;
    font-weight: 500;
}

.title {
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    font-weight: bold;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.2;
}

.profile-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
