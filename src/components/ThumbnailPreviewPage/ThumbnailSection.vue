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
        <UploadThumbnailButton 
            @click="openFileExplorer"
        />
        <div class="thumbnails">
            <UploadedThumbnail
                v-for="thumbnail in thumbnails"
                :key="thumbnail.name"
                :thumbnail="thumbnail"
            />
        </div>
    </div>
</template>
<script>
import UploadThumbnailButton from '@/components/ThumbnailPreviewPage/UploadThumbnailButton.vue';

export default {
    components: {
        UploadThumbnailButton,
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
            this.$emit('files-dropped', files);
        },
    },
    mounted() {
        console.log(this.thumbnails);
    },
}
</script>
<style>
.thumbnail-section {
    width: 100%;
    color: black;
}
.title {
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
}
</style>