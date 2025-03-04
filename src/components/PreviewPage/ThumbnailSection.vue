<template>
    <div class="w-full text-black">
        <SectionTitle>Thumbnails</SectionTitle>
        <input
            type="file"
            ref="fileInput"
            accept=".jpg,.jpeg,.png"
            class="file-input"
            @change="onFileChange"
            multiple
            hidden
        />
        <div class="grid grid-cols-2 grid-rows-2 gap-2.5 w-full">
            <UploadThumbnailButton 
                @click="openFileExplorer"
                class="aspect-[16/9] bg-gray-300 rounded-lg max-w-full"
            />
            <UploadedThumbnail
                v-for="(thumbnail, index) in thumbnails"
                :key="thumbnail.file.name"
                :thumbnail="thumbnail"
                :index="index"
                :activeContextMenu="activeContextMenuIndex === index"
                class="aspect-[16/9] bg-gray-300 rounded-lg max-w-full"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UploadThumbnailButton from '@/components/PreviewPage/UploadThumbnailButton.vue';
import UploadedThumbnail from '@/components/PreviewPage/UploadedThumbnail.vue';
import SectionTitle from '@/components/UI/SectionTitle.vue';

export default {
    components: {
        UploadThumbnailButton,
        UploadedThumbnail,
        SectionTitle,
    },
    computed: {
        ...mapGetters('thumbnails', ['getThumbnails']),
        ...mapGetters('ui', ['getActiveContextMenuIndex']),
        thumbnails() {
            return this.getThumbnails;
        },
        activeContextMenuIndex() {
            return this.getActiveContextMenuIndex;
        }
    },
    methods: {
        ...mapActions('thumbnails', ['selectThumbnail', 'addThumbnails']),
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
    },
}
</script>