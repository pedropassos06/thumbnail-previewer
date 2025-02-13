<template>
    <div class="your-channel-section">
        <SectionTitle>Your Channel</SectionTitle>
        <div class="your-channel-section-wrapper">
            <InputBox type="text" placeholder="ex: @pedropassos_" />
            <ActionButton 
                width="100%"
                backgroundColor="#FF0000" 
                textColor="#FFFFFF" 
                stroke="#FF0000" 
                hasDropShadow
            >Search my channel
            </ActionButton>
        </div>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import InputBox from '@/components/InputBox.vue';
import ActionButton from '@/components/ActionButton.vue';

export default {
    name: "YourChannelSection",
    components: {
        SectionTitle,
        InputBox,
        ActionButton,
    },
}
</script>

<style>
.your-channel-section {
    width: 100%;
    color: black;
}

.your-channel-section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>