<template>
    <div class="title-section">
        <SectionTitle>Titles</SectionTitle>
        <div class="title-section-wrapper">
            <div v-for="(title, index) in titles" class="title-record">
                <input
                    type="text" 
                    placeholder="Video title here..." 
                    class="title-input"
                />
                <font-awesome-icon class="delete-title-icon" icon="fa-solid fa-trash" @click="handleDeleteTitle(index)"/>
            </div>
            <AddTitleButton @click="handleAddTitle"/>
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
        },
        handleDeleteTitle(index) {
            this.removeTitle(index);
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

.title-record {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
}

.delete-title-icon {
    cursor: pointer;
    color: #6f6f6f;
    :hover {
        color: red;
    }
}

.title-input {
    border-radius: 10px;
    border: 1.2px solid black;
    padding: 9px;
    width: 100%;
}
</style>