<template>
    <div class="relative w-full h-full cursor-pointer" @contextmenu.prevent="openContextMenu($event)" @click="handleSelectThumbnail">
        <img 
            class="uploaded-thumbnail w-full h-full rounded-lg bg-gray-300 cursor-pointer" 
            :class="{ 'border-2 border-red-500': thumbnail.isSelected }"
            :src="thumbnail.url" 
        />
        <div 
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-lg border-4 border-red-500" 
            v-if="thumbnail.isSelected"
        />
        <p 
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-2xl font-bold" 
            v-if="thumbnail.isSelected"
        >
            <font-awesome-icon icon="fa-solid fa-check" />
        </p>
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
            <div v-if="activeContextMenu" class="fixed bg-gray-700 rounded-lg shadow-md p-2 z-20 flex flex-col gap-1 opacity-95 min-w-[150px]" :style="{ top: contextMenuY + 'px', left: contextMenuX + 'px' }" @click.stop>
                <button @click="handleSelectThumbnail" class="w-full text-white font-normal bg-transparent border-none py-2 px-3 cursor-pointer text-left rounded-lg flex items-center gap-2">
                    <font-awesome-icon icon="fa-solid fa-check" /> Select This Thumbnail
                </button>
                <button @click="handleOpenModal" class="w-full text-white font-normal bg-transparent border-none py-2 px-3 cursor-pointer text-left rounded-lg flex items-center gap-2 hover:bg-red-700">
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
            this.selectThumbnail(this.index);
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

<style scoped>
/* Fade Animation */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
