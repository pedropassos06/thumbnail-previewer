<template>
    <div class="flex flex-col justify-between items-center text-black border border-solid border-[#E6E7EA] rounded-[15px] px-5 py-10 w-full">
        <LeftMenuToggleButton />
        <ThumbnailSection :thumbnails="thumbnails" />
        <TitleSection />
        <YourChannelSection />
    </div>
</template>

<script>
import LeftMenuToggleButton from "@/components/PreviewPage/LeftMenuToggleButton.vue";
import ThumbnailSection from "@/components/PreviewPage/ThumbnailSection.vue";
import TitleSection from "@/components/PreviewPage/TitleSection.vue";
import YourChannelSection from "@/components/PreviewPage/YourChannelSection.vue";
import { mapGetters } from "vuex";

export default {
    name: "LeftMenu",
    computed: {
        ...mapGetters('thumbnails', ["getThumbnails"]),
        thumbnails() {
            return this.getThumbnails;
        },
    },
    components: {
        LeftMenuToggleButton,
        ThumbnailSection,
        TitleSection,
        YourChannelSection,
    },
}
</script>