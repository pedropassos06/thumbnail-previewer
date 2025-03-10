<template>
	<div
		class="drop-zone"
		:class="{ 'drop-zone--drag-over': isDragging }"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
		@drop.prevent="onDrop"
	>
		<div class="drop-zone__content">
		<font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="drop-zone__icon" />
		<h3 class="drop-zone-header">{{ header }}</h3>
		<p class="drop-zone-subheader">{{ subheader }}</p>
		<input
			type="file"
			ref="fileInput"
			accept=".jpg,.jpeg,.png"
			class="file-input"
			@change="onFileChange"
			multiple
			hidden
		/>
		<ActionButton
			type="primary"
			@click="openFileExplorer"
		>
			{{ buttonText }}
		</ActionButton>
		</div>
	</div>
</template>


<script>
import ActionButton from "@/components/UI/ActionButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapActions } from "vuex";

export default {
	name: "DropZone",
	components: {
		ActionButton,
	},
	props: {
		icon: {
			type: String,
			default: "@/components/icons/import-icon.svg",
		},
		header: {
			type: String,
			default: "Drop file or browse",
		},
		subheader: {
			type: String,
			default: "Format: .jpeg, .png & Max file size: 2 MB",
		},
		buttonText: {
			type: String,
			default: "Browse Files",
		},
		showButton: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			isDragging: false,
		};
	},
	methods: {
		...mapActions('thumbnails', ["updateThumbnails", "addThumbnails"]),
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
		openFileExplorer() {
			// Programmatically open the file picker
			this.$refs.fileInput.click();
		},
		onFileChange(event) {
			// Handle selected files from file input
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px dashed #FF0000;
	background-color: #FDF6FE;
	border-radius: 10px;
	height: 100%;
	width: 100%;
	text-align: center;
}

.upload-icon {
	width: 25px;
	height: 25px;
	margin-bottom: 10px;
}

.drop-zone-header {
	color: #181D27;
	font-weight: bold;
}

.drop-zone-subheader {
	color: #6C606C;
	margin-bottom: 20px;
}

.drop-zone--drag-over {
	border-color: #007bff;
	background-color: #e6f7ff;
}

.drop-zone__content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.drop-zone__icon {
	color: red;
	font-size: 35px;
	margin-bottom: 10px;
}

.drop-zone__text {
	font-size: 16px;
	color: #333333;
	margin-bottom: 10px;
}

.drop-zone__button {
	background-color: #007bff;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
}

.drop-zone__button:hover {
  	background-color: #0056b3;
}
</style>
