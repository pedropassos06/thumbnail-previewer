<template>
    <div class="your-channel-section">
        <SectionTitle>Your Channel</SectionTitle>
        <div class="your-channel-section-wrapper">
            <InputBox type="text" placeholder="ex: @pedropassos_" v-model="channelModel" />
            <ActionButton 
                width="100%"
                backgroundColor="#FF0000" 
                textColor="#FFFFFF" 
                stroke="#FF0000" 
                hasDropShadow
                @click="searchChannel"
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
    data() {
        return {
            channelModel: '',
        }
    },
    components: {
        SectionTitle,
        InputBox,
        ActionButton,
    },
    methods: {
        searchChannel() {
            if (this.channelModel) {
                console.log(`Searching for channel: ${this.channelModel}`);
            }
        }
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