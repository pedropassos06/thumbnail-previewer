<template>
    <img class="uploaded-thumbnail" :src="thumbnail.url" />
</template>

<script>
export default {
    name: "UploadedThumbnail",
    props: {
        thumbnail: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style>
.uploaded-thumbnail {
    background-color: #D5D5D5;
    border-radius: 10px;
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>