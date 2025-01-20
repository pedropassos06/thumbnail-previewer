<template>
	<div
		class="drop-zone"
		:class="{ 'drop-zone--drag-over': isDragging }"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
		@drop.prevent="onDrop"
	>
		<div class="drop-zone__content">
            <UploadedImageCard :fileName="files[0].name" />
		    <p class="drop-zone-subheader">Click done or <a class="hyperlink">browse again</a></p>
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
.drop-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed #14AE5C;
    background-color: #F7FEF6;
    border-radius: 10px;
    text-align: center;
}

.drop-zone-subheader {
    color: #6C606C;
    margin-bottom: 20px;
}

.hyperlink {
    color: #FF0000;
    text-decoration: underline;
}

.drop-zone--drag-over {
    border-color: #007bff;
    background-color: #e6f7ff;
}

.drop-zone__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #6C606C;
    height: 90%;
    width: 100%;
}
</style>
