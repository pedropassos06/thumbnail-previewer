<template>
    <div class="uploaded-thumbnail">
        <img src="https://via.placeholder.com/150" alt="thumbnail" />
    </div>
</template>

<script>
export default {
    name: "UploadedThumbnail",
    props: {
        thumbnail: {
            type: Thumbnail,
            default: () => {},
        },
    },
}
</script>

<style>
    
</style>