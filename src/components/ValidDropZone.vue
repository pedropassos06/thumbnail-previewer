<template>
	<div
		class="drop-zone"
		:class="{ 'drop-zone--drag-over': isDragging }"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
		@drop.prevent="onDrop"
	>
		<div class="drop-zone__content">
		<p class="drop-zone-subheader">{{ subheader }}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: "ValidDropZone",
  props: {
    subheader: {
      type: String,
      default: "Click done or browse again",
    },
  },
  data() {
    return {
      isDragging: false,
    };
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
      const files = event.dataTransfer.files;
      this.$emit("files-dropped", files);
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
  padding: 20%;
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
  width: 40px;
  height: 40px;
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
