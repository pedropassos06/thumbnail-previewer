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
        <div class="thumbnail-grid">
            <UploadThumbnailButton 
                @click="openFileExplorer"
                class="thumbnail-item"
            />
            <UploadedThumbnail
                v-for="(thumbnail, index) in thumbnails"
                :key="thumbnail.file.name"
                :thumbnail="thumbnail"
                :index="index"
                :activeContextMenu="activeContextMenuIndex === index"
                class="thumbnail-item"
                @contextmenu.prevent="handleOpenContextMenu"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UploadThumbnailButton from '@/components/ThumbnailPreviewPage/UploadThumbnailButton.vue';
import UploadedThumbnail from '@/components/ThumbnailPreviewPage/UploadedThumbnail.vue';

export default {
    components: {
        UploadThumbnailButton,
        UploadedThumbnail,
    },
    computed: {
        ...mapGetters(['getThumbnails', 'getActiveContextMenuIndex']),
        thumbnails() {
            return this.getThumbnails;
        },
        activeContextMenuIndex() {
            return this.getActiveContextMenuIndex;
        }
    },
    methods: {
        ...mapActions(['selectThumbnail', 'addThumbnails']),
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
        handleOpenContextMenu(index) {
            this.setActiveContextMenuIndex(index);
        }
    },
}
</script>

<style scoped>
.thumbnail-section {
    width: 100%;
    color: black;
}

.title {
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 10px;
}

/* 2x2 grid layout */
.thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two equal columns */
    grid-template-rows: repeat(2, 1fr); /* Two equal rows */
    gap: 10px;
    width: 100%;
}

/* Ensures each thumbnail/button maintains a 16:9 aspect ratio */
.thumbnail-item {
    aspect-ratio: 16 / 9;
    background: lightgray;
    border-radius: 10px;
    max-width: 100%;
}
</style>
