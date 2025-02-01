<template>
    <div class="left-menu">
        <LeftMenuToggleButton />
        <ThumbnailSection />
    </div>
</template>

<script>
import LeftMenuToggleButton from "@/components/ThumbnailPreviewPage/LeftMenuToggleButton.vue";
import ThumbnailSection from "@/components/ThumbnailPreviewPage/ThumbnailSection.vue";

export default {
    name: "LeftMenu",
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