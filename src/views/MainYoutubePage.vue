<template>
    <div class="main-youtube-grid">
        <YourYoutubeThumbnail />
        <FullYoutubeThumbnail v-for="video in mockVideos" :key="video.id" :video="video" />
    </div>
</template>

<script>
import mockVideos from '@/mock/mockVideos';
import FullYoutubeThumbnail from '@/components/PreviewPage/FullYoutubeThumbnail.vue';
import YourYoutubeThumbnail from '@/components/PreviewPage/YourYoutubeThumbnail.vue';

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
}
</script>

<style>
.main-youtube-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 20px;
}
</style>