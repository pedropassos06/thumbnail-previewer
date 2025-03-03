<template>
    <div class="preview-thumbnail-page">
        <LeftMenu class="left-menu" :thumbnails="thumbnails" />
        <MainYoutubePage class="main-youtube-page" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import LeftMenu from "@/components/PreviewPage/LeftMenu.vue";
import MainYoutubePage from "../components/PreviewPage/MainYoutubeSection.vue";

export default {
    computed: {
        ...mapGetters('thumbnails', ["getThumbnails"]),
        thumbnails() {
            return this.getThumbnails;
        }
    },
    components: {
        LeftMenu,
        MainYoutubePage,
    },
}
</script>

<style>
.preview-thumbnail-page {
    display: flex;
    height: 100vh;
    background-color: #fff;
    color: black;
    padding: 3rem;
}

.left-menu {
    flex: 1 1 20%;
}

.main-youtube-page {
    flex: 1 1 80%;
    padding: 0 1rem;
}
</style>