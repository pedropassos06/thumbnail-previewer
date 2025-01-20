<template>
    <div class="uploaded-image-card">
        <p>{{ fileName }}</p>
        <img src="@/components/icons/check.svg" alt="Delete Icon" class="check-icon"/>
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
    };
</script>

<style scoped>
.uploaded-image-card {
    display: flex;
    justify-content: center;
    border: 1px solid #E6E7EA;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 4% 10%;
    text-align: center;
}

.check-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}
</style>