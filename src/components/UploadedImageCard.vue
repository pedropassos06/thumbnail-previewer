<template>
    <div class="uploaded-image-card">
        <p>{{ fileName }}</p>
        <img src="@/components/icons/cross.svg" alt="Delete Icon" class="cross-icon" @click="handleDeleteImage" />
    </div>
</template>

<script>
    export default {
        name: "UploadedImageCard",
        props: {
            fileName: {
                type: String,
                required: true,
            },
        },
        methods: {
            handleDeleteImage() {
                this.$emit("delete-image", this.fileName);
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
    padding: 1rem 2rem;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.cross-icon {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;

}
</style>