<template>
    <div class="preview-thumbnail-page">
        <LeftMenu class="left-menu" :thumbnails="thumbnails" />
        <MainYoutubePage class="main-youtube-page" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import LeftMenu from "@/components/ThumbnailPreviewPage/LeftMenu.vue";
import MainYoutubePage from "./MainYoutubePage.vue";

export default {
    computed: {
        ...mapGetters(["getThumbnails"]),
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
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: black;
    padding: 3rem;
}

.left-menu {
    width: 20%;
    height: 90%;
}
</style>