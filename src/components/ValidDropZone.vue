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
                <div v-for="file in files" :key="file.name" class="uploaded-image-card-container">
                    <UploadedImageCard :fileName="file.name" @delete-image="handleDeleteImage" />
                </div>
                <p class="drop-zone-subheader">Click done or <a class="hyperlink">browse again</a></p>
            </div>
        </div>
	</div>
</template>

<script>
import UploadedImageCard from './UploadedImageCard.vue';

export default {
    name: "ValidDropZone",
    data() {
        return {
            isDragging: false,
        };
    },
    props: {
        files: {
            type: Array,
            required: true,
        },
    },
    components: {   
        UploadedImageCard,
    },
    methods: {
        onDragOver() {
            this.isDragging = true;
        },
        onDragLeave() {
            this.isDragging = false;
        },
        onDrop(event) {
            this.isDragging = false;
            const reuploadedFiles = Array.from(event.dataTransfer.files); 
            this.$emit("files-dropped", reuploadedFiles);
        },
        onButtonClick() {
            this.$emit("button-clicked");
        },
        handleDeleteImage(fileName) {
            this.$emit("delete-file", fileName);
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
    height: 90%;
    width: 100%;
    padding: 10% 0%;
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
</style>
