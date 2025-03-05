<template>
    <div :href="video.url" class="flex flex-col justify-start items-center gap-2.5">
        <div class="relative w-full">
            <img class="aspect-[16/9] w-full object-cover rounded-[10px]" :src="video.thumbnail" :alt="video.title">
            <div class="absolute bottom-1.5 right-1.5 bg-black bg-opacity-80 text-white text-xs !font-bold px-1 py-1 rounded">
                {{ video.duration }}
            </div>
        </div>
        <div class="flex gap-2.5 items-start w-full">
            <img class="w-10 h-10 rounded-full" :src="video.channelProfilePic" :alt="video.channelName">
            <div class="flex flex-col w-full">
                <h3 class="!font-bold w-full !text-wrap text-base">
                    {{ video.title }}
                </h3>
                <div class="text-[15px] text-[#606060]">
                    <span>{{ video.channelName }}</span>
                    <div class="flex gap-1">
                        <span>{{ video.views }} views</span>
                        <span>•</span>
                        <span>{{ video.uploadedWhen }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FullYoutubeThumbnail",
    props: {
        video: {
            type: Object,
            required: true,
        }
    }
}
</script>