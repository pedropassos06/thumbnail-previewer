<template>
    <div class="grid grid-cols-4 gap-x-2.5 gap-y-5 ">
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