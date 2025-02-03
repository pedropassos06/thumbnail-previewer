<template>
    <div class="thumbnail-section">
        <h3 class="title">Thumbnails</h3>
        <input
            type="file"
            ref="fileInput"
            accept=".jpg,.jpeg,.png"
            class="file-input"
            @change="onFileChange"
            multiple
            hidden
        />
        <div class="thumbnail-grid">
            <UploadThumbnailButton 
                @click="openFileExplorer"
                class="thumbnail-item"
            />
            <UploadedThumbnail
                v-for="thumbnail in thumbnails"
                :key="thumbnail.name"
                :thumbnail="thumbnail"
                class="thumbnail-item"
            />
        </div>
    </div>
</template>

<script>
import UploadThumbnailButton from '@/components/ThumbnailPreviewPage/UploadThumbnailButton.vue';
import UploadedThumbnail from '@/components/ThumbnailPreviewPage/UploadedThumbnail.vue';

export default {
    components: {
        UploadThumbnailButton,
        UploadedThumbnail,
    },
    props: {
        thumbnails: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        openFileExplorer() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const files = event.target.files;
            console.log(files);
            this.$emit('files-dropped', files);
        },
    },
}
</script>

<style scoped>
.thumbnail-section {
    width: 100%;
    color: black;
}

.title {
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 10px;
}

/* 2x2 grid layout */
.thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two equal columns */
    grid-template-rows: repeat(2, 1fr); /* Two equal rows */
    gap: 10px;
    width: 100%;
}

/* Ensures each thumbnail/button maintains a 16:9 aspect ratio */
.thumbnail-item {
    aspect-ratio: 16 / 9;
    background: lightgray;
    border-radius: 10px;
    max-width: 100%;
}
</style>
