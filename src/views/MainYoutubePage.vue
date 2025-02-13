<template>
    <div class="main-youtube-grid">
        <YourYoutubeThumbnail />
        <FullYoutubeThumbnail v-for="video in mockVideos" :key="video.id" :video="video" />
    </div>
</template>

<script>
import mockVideos from '@/mock/mockVideos';
import FullYoutubeThumbnail from '@/components/ThumbnailPreviewPage/FullYoutubeThumbnail.vue';
import YourYoutubeThumbnail from '@/components/ThumbnailPreviewPage/YourYoutubeThumbnail.vue';

export default {
    name: "MainYoutubePage",
    components: {
        FullYoutubeThumbnail,
        YourYoutubeThumbnail,
    },
    data() {
        return {
            mockVideos,
        }
    },
    mounted() {
        console.log(this.mockVideos);
    }
}
</script>

<style>
.main-youtube-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 20px;
}
</style>