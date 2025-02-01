<template>
    <div class="left-menu">
        <LeftMenuToggleButton />
    </div>
</template>

<script>
import LeftMenuToggleButton from "@/components/ThumbnailPreviewPage/LeftMenuToggleButton.vue";

export default {
    name: "LeftMenu",
    components: {
        LeftMenuToggleButton,
    },
}
</script>

<style>
.left-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    border: 1px solid #E6E7EA;
    border-radius: 15px;
    padding: 1%;
}
</style>