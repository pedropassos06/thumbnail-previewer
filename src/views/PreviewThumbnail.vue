<template>
    <div class="preview-thumbnail-page">
        <LeftMenu class="left-menu" :thumbnails="thumbnails" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import LeftMenu from "@/components/ThumbnailPreviewPage/LeftMenu.vue";

export default {
    computed: {
        ...mapGetters(["getFiles"]),
        thumbnails() {
            return this.getFiles;
        }
    },
    components: {
        LeftMenu,
    },
}
</script>

<style>
.preview-thumbnail-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: black;
}

.left-menu {
    width: 20%;
    height: 90%;
}
</style>