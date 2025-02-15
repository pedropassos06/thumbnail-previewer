<template>
    <div class="thumbnail-container" @contextmenu.prevent="openContextMenu($event)" @click="handleSelectThumbnail">
        <img 
            class="uploaded-thumbnail"
            :class="{ 'selected': thumbnail.isSelected }"
            :src="thumbnail.url" 
        />
        <div 
            class="overlay"
            v-if="thumbnail.isSelected"
        />
        <p 
            class="checkmark" 
            v-if="thumbnail.isSelected" 
        >✓</p>
        <confirmation-modal
            v-model="showModal"
            title="Delete Item"
            message="Are you sure you want to delete this item?"
            @confirm="handleDeleteImage"
            @cancel="handleCloseModal"
            @click.stop
        />

        <!-- Context Menu -->
        <transition name="fade">
            <div v-if="activeContextMenu" class="context-menu" :style="{ top: contextMenuY + 'px', left: contextMenuX + 'px' }" @click.stop>
                <button @click="handleSelectThumbnail">
                    <font-awesome-icon icon="fa-solid fa-check" /> Select This Thumbnail
                </button>
                <button @click="handleOpenModal">
                    <font-awesome-icon icon="fa-solid fa-trash" /> Delete Thumbnail
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "UploadedThumbnail",
    props: {
        thumbnail: {
            type: Object,
            default: () => ({}),
        },
        index: {
            type: Number,
            default: -1,
        },
        activeContextMenu: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showModal: false,
            contextMenuX: 0,
            contextMenuY: 0,
        };
    },
    methods: {
        ...mapActions('thumbnails', ["selectThumbnail", "deleteThumbnail"]), 
        ...mapActions('ui', ["setActiveContextMenuIndex"]),
        openContextMenu(event) {
            event.preventDefault();
            
            this.contextMenuX = event.clientX;
            this.contextMenuY = event.clientY;

            // Update Vuex store with the index
            this.setActiveContextMenuIndex(this.index);
            
            document.addEventListener("click", this.closeContextMenu);
        },
        closeContextMenu() {
            this.setActiveContextMenuIndex(-1);
            document.removeEventListener("click", this.closeContextMenu);
        },
        handleSelectThumbnail() {
            this.selectThumbnail(this.thumbnail.file.name);
            this.closeContextMenu();
        },
        handleDeleteImage() {
            this.deleteThumbnail(this.index);
        },
        handleOpenModal() {
            this.showModal = true;
            this.closeContextMenu();
        },
        handleCloseModal() {
            this.showModal = false;
        }
    }
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
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 4px solid red;
}

.context-menu {
    position: fixed;
    background: #595959;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    padding: 4px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
    opacity: 0.95;
    min-width: 150px;
}

.context-menu button {
    width: 100%;
    color: white;
    font-weight: normal;
    background: none;
    border: none;
    padding: 8px 10px;
    cursor: pointer;
    text-align: left;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.context-menu button:hover {
    background: rgba(255, 0, 0, 0.9);
}

/* Fade Animation */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
