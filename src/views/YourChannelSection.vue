<template>
    <div class="your-channel-section">
        <SectionTitle>Your Channel</SectionTitle>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
    name: "YourChannelSection",
    components: {
        SectionTitle,
    },
}
</script>

<style>
.your-channel-section {
    width: 100%;
    color: black;
}
</style>