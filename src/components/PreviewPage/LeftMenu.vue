<template>
    <div class="left-menu">
        <LeftMenuToggleButton />
        <ThumbnailSection :thumbnails="thumbnails" />
        <TitleSection />
        <YourChannelSection />
    </div>
</template>

<script>
import LeftMenuToggleButton from "@/components/PreviewPage/LeftMenuToggleButton.vue";
import ThumbnailSection from "@/components/PreviewPage/ThumbnailSection.vue";
import TitleSection from "@/views/TitleSection.vue";
import YourChannelSection from "@/views/YourChannelSection.vue";
import { mapGetters } from "vuex";

export default {
    name: "LeftMenu",
    computed: {
        ...mapGetters('thumbnails', ["getThumbnails"]),
        thumbnails() {
            return this.getThumbnails;
        },
    },
    components: {
        LeftMenuToggleButton,
        ThumbnailSection,
        TitleSection,
        YourChannelSection,
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
    width: 100%;
}
</style>