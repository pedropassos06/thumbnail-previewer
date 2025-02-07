<template>
    <div class="title-section">
        <SectionTitle>Titles</SectionTitle>
        <div class="title-section-wrapper">
            <input
                v-for="(title, index) in titles"
                type="text" 
                placeholder="Video title here..." 
                class="title-input"
            />
            <AddTitleButton @click="handleAddTitle()"/>
        </div>
    </div>
</template>
<script>
import AddTitleButton from '@/components/AddTitleButton.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "TitleSection",
    components: {
        SectionTitle,
        AddTitleButton,
    },
    computed: {
        ...mapGetters(['getTitles']),
        titles() {
            return this.getTitles;
        }
    },
    methods: {
        ...mapActions(['addTitle', 'removeTitle']),
        handleAddTitle() {
            this.addTitle("");
        }
    }
}
</script>
<style>
.title-section {
    width: 100%;
    color: black;
}

.title-section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.title-input {
    border-radius: 10px;
    border: 1px solid black;
    padding: 7px;
    width: 100%;
}
</style>