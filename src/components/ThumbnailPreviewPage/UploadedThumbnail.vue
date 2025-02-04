<template>
    <div class="thumbnail-container">
        <img 
            class="uploaded-thumbnail"
            :class="{ 'selected': isSelected }"
            :src="thumbnail.url" 
            @click="$emit('select', thumbnail)"
        />
        <div class="overlay"></div>
        <p 
            class="checkmark" 
            v-if="isSelected" 
        >✓
        </p>
    </div>
</template>

<script>
export default {
    name: "UploadedThumbnail",
    props: {
        thumbnail: {
            type: Object,
            default: () => ({}),
        },
        isSelected: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style>
.uploaded-thumbnail {
    cursor: pointer;
    background-color: #D5D5D5;
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

.uploaded-thumbnail.selected {
    border: 2px solid red;
}

.thumbnail-container {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
}

.checkmark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    font-size: 2em;
    font-weight: bold;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Black overlay with 50% opacity */
    border-radius: 10px;
    border: 2px solid red;
}
</style>