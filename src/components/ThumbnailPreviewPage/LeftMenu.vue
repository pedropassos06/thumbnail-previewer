<template>
    <div class="left-menu">
        <LeftMenuToggleButton />
        <ThumbnailSection :thumbnails="thumbnails" />
    </div>
</template>

<script>
import LeftMenuToggleButton from "@/components/ThumbnailPreviewPage/LeftMenuToggleButton.vue";
import ThumbnailSection from "@/components/ThumbnailPreviewPage/ThumbnailSection.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "LeftMenu",
    computed: {
        ...mapGetters(["getThumbnails"]),
        thumbnails() {
            return this.getThumbnails;
        },
    },
    components: {
        LeftMenuToggleButton,
        ThumbnailSection,
    },
}
</script>

<style>
.left-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;
    border: 1px solid #E6E7EA;
    border-radius: 15px;
    padding: 1.5%;
}
</style>