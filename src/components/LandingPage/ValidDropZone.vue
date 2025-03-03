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
                <div class="grid-container">
                    <div 
                        v-for="thumbnail in thumbnails" 
                        :key="thumbnail.file.name" 
                        class="uploaded-image-card-container">
                        <UploadedImageCard :thumbnail="thumbnail" @delete-image="handleDeleteImage" />
                    </div>
                </div>
                <p class="drop-zone-subheader">
                    Click done or&nbsp;<a class="hyperlink" @click="openFileExplorer">browse again</a>
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
        ...mapGetters('thumbnails', ["getThumbnails"]),
        thumbnails() {
            return this.getThumbnails;
        }
    },
    methods: {
        ...mapActions('thumbnails', ["updateThumbnails", "deleteThumbnail", "addThumbnails"]),
        onDragOver() {
            this.isDragging = true;
        },
        onDragLeave() {
            this.isDragging = false;
        },
        onDrop(event) {
            this.isDragging = false;
			const files = Array.from(event.dataTransfer.files);
			const filteredFiles = files.filter((file) => {
				const fileType = file.type;
				return fileType === "image/jpeg" || fileType === "image/png";
			});
			const validFiles = filteredFiles.map((file) => {
				return {
					file,
					isSelected: false,
					url: URL.createObjectURL(file),
				};
			});
			this.updateThumbnails(validFiles);
        },
        handleDeleteImage(thumbnail) {
            const index = this.thumbnails.indexOf(thumbnail);  // Find the index based on the object
            if (index !== -1) {
                this.deleteThumbnail(index);  // Perform deletion action here
            }
        },
        openFileExplorer() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const selectedFiles = Array.from(event.target.files).map(file => {
                return {
                    file,
                    isSelected: false,
                    url: URL.createObjectURL(file)
                };
            });
            this.addThumbnails(selectedFiles);
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
    margin-bottom: 10px;
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

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
}
</style>
