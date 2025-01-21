<template>
	<div
		class="drop-zone"
		:class="{ 'drop-zone--drag-over': isDragging }"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
		@drop.prevent="onDrop"
	>
        <div v-for="file in files" :key="file.name" class="uploaded-image-card-container">
            <UploadedImageCard :fileName="file.name" />
        </div>
		<p class="drop-zone-subheader">Click done or <a class="hyperlink">browse again</a></p>
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
            const reuploadedFiles = event.dataTransfer.files;
            this.$emit("files-dropped", reuploadedFiles);
        },
        onButtonClick() {
            this.$emit("button-clicked");
        },
    },
};
</script>

<style scoped>
.drop-zone-subheader {
    color: #6C606C;
    margin-bottom: 20px;
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

.drop-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #6C606C;
    border: 1px dashed #14AE5C;
    background-color: #F7FEF6;
    border-radius: 10px;
    height: 90%;
    width: 100%;
    padding: 10% 0%;
}

.uploaded-image-card-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
</style>
