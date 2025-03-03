<template>
    <div class="uploaded-image-card">
        <p class="file-name">{{ truncatedName }}</p>
        <font-awesome-icon icon="fa-remove" class="cross-icon" @click="handleDeleteImage" />
    </div>
</template>

<script>
export default {
    name: "UploadedImageCard",
    props: {
        thumbnail: {
            type: Object,
            required: true,
        },
    },
    computed: {
        truncatedName() {
            const name = this.thumbnail.file.name
            return name.length > 20 ? name.slice(0,17) + "..." : name
        }
    },
    methods: {
        handleDeleteImage() {
            this.$emit("delete-image", this.thumbnail);
        },
    }
};
</script>

<style scoped>
.uploaded-image-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E6E7EA;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    max-width: 90%;
}

.file-name {
    color: #181D27;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cross-icon {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
}
</style>
