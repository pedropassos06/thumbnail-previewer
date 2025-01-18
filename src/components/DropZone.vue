<template>
    <div
      class="drop-zone"
      :class="{ 'drop-zone--drag-over': isDragging }"
      @dragover.prevent="onDragOver"
      @dragleave="onDragLeave"
      @drop.prevent="onDrop"
    >
      <div class="drop-zone__content">
        <img :src="icon" alt="Upload Icon" class="upload-icon" />
        <p class="drop-zone-text">{{ text }}</p>
        <ActionButton
          width="150px"
          height="40px"
          backgroundColor="#FF0000"
          textColor="#FFFFFF"
        >
          {{ buttonText }}
        </ActionButton>
      </div>
    </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "DropZone",
  components: {
    ActionButton,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
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
  border: 2px dashed #E6E7EA;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
.upload-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}
.drop-zone-text {
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
