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
    border-radius: 10px;
    padding: 1rem 2rem;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.check-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}
</style>