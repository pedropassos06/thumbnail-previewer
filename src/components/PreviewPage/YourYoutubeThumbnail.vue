<template>
    <div class="flex flex-col items-start gap-2.5">
        <div class="relative w-full">
            <img v-if="selectedThumbnail" :src="selectedThumbnail.url" class="aspect-[16/9] w-full rounded-[10px]">
            <img v-else :src="blankThumbnail" class="aspect-[16/9] w-full rounded-[10px]">
            <div class="absolute bottom-1.5 right-1.5 bg-black bg-opacity-80 text-white text-xs !font-bold px-1 py-1 rounded">
                {{ videoDuration }}
            </div>
        </div>
        <div class="flex gap-2.5 items-start w-full">
            <img class="w-10 h-10 rounded-full bg-gray-300" :src="profilePic">
            <div class="flex flex-col w-full">
                <h3 class="!font-bold w-full !text-wrap text-base">{{ selectedTitle }}</h3>
                <div class="text-[15px] text-[#606060]">
                    <span>{{ channelName }}</span>
                    <div class="flex gap-1">
                        <span>10K views</span>
                        <span> • </span>
                        <span>1 hour ago</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import blankThumbnail from '@/assets/mock/blank-thumbnail.png';

export default {
    name: "YourYoutubeThumbnail",
    data() {
        return {
            blankThumbnail
        };
    },
    computed: {
        ...mapGetters('thumbnails', ["getSelectedThumbnail"]),
        ...mapGetters('channel', ["getChannelName", "getChannelProfilePic"]),
        ...mapGetters('titles', ["getSelectedTitle"]),
        selectedThumbnail() {
            return this.getSelectedThumbnail;
        },
        selectedTitle() {
            const maxLength = window.innerWidth < 768 ? 50 : 70; // Mobile: 50 chars, Desktop: 70 chars
            const title = this.getSelectedTitle || "Your Video Title Here";

            if (title.length <= maxLength) return title;

            // Find the last space before the cutoff
            let truncated = title.slice(0, maxLength);
            let lastSpaceIndex = truncated.lastIndexOf(" ");

            // If there's a space, cut at the last whole word; otherwise, use maxLength
            if (lastSpaceIndex > 0) {
                truncated = truncated.slice(0, lastSpaceIndex);
            }

            return truncated + "...";
        },
        channelName() {
            return this.getChannelName || 'Your Channel Here';
        },
        profilePic() {
            return this.getChannelProfilePic || '';
        },
        videoDuration() {
            return this.selectedThumbnail ? '10:01' : '0:00';
        }
    },
}
</script>