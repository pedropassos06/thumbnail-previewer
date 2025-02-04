<template>
	<div
		class="drop-zone"
		:class="{ 'drop-zone--drag-over': isDragging }"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
		@drop.prevent="onDrop"
	>
        <div class="drop-zone__content">
            <div v-if="isDragging" class="drop-zone__drag-content">
                <p class="drop-zone-subheader">You can drop you image now</p>
            </div>
            <div v-else class="drop-zone__no-drag-content">
                <div 
                    v-for="thumbnail in thumbnails" 
                    :key="thumbnail.name" 
                    class="uploaded-image-card-container">
                    <UploadedImageCard :fileName="thumbnail.name" @delete-image="handleDeleteImage" />
                </div>
                <p class="drop-zone-subheader">
                    Click done or <a class="hyperlink" @click="openFileExplorer">browse again</a>
                </p>
                <input type="file" ref="fileInput" accept=".jpg,.jpeg,.png" class="hidden-file-input" @change="onFileChange" multiple hidden />
            </div>
        </div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UploadedImageCard from './UploadedImageCard.vue';

export default {
    name: "ValidDropZone",
    data() {
        return {
            isDragging: false,
        };
    },
    components: {   
        UploadedImageCard,
    },
    computed: {
        ...mapGetters(["getThumbnails"]),
        thumbnails() {
            return this.getThumbnails;
        }
    },
    methods: {
        ...mapActions(["updateThumbnails", "deleteThumbnail"]),
        onDragOver() {
            this.isDragging = true;
        },
        onDragLeave() {
            this.isDragging = false;
        },
        onDrop(event) {
            this.isDragging = false;
            const reuploadedFiles = Array.from(event.dataTransfer.files);
            const filteredFiles = reuploadedFiles.filter((file) => {
				const fileType = file.type;
				return fileType === "image/jpeg" || fileType === "image/png";
			});
			filteredFiles.forEach((file) => {
                file.isSelected = false;
				file.url = URL.createObjectURL(file);
			});
            this.updateThumbnails(filteredFiles);
        },
        handleDeleteImage(fileName) {
            this.deleteThumbnail(fileName);
        },
        openFileExplorer() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const selectedFiles = Array.from(event.target.files);
            selectedFiles.forEach((file) => {
                file.isSelected = false;
				file.url = URL.createObjectURL(file);
			});
            this.updateThumbnails(selectedFiles);
        },
    },
};
</script>

<style scoped>
.drop-zone {
    color: #6C606C;
    border: 1px dashed #14AE5C;
    background-color: #F7FEF6;
    border-radius: 10px;
    padding: 0% 10%;
    height: 90%;
    width: 100%;
}

.drop-zone-subheader {
    display: flex;
    justify-content: center;
}

.hyperlink {
    color: #FF0000;
    text-decoration: underline;
}

.hyperlink:hover {
    cursor: pointer;
}

.drop-zone--drag-over {
    border-color: #007bff;
    background-color: #e6f7ff;
}

.uploaded-image-card-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.drop-zone__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.hidden-file-input {
    display: none;
}
</style>
