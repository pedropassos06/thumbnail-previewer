<template>
    <div class="title-section">
        <SectionTitle>Titles</SectionTitle>
        <div class="title-section-wrapper">
            <div v-for="(_, index) in titles" class="title-record">
                <InputBox v-model="titles[index].value" placeholder="Enter title..." :selected="titles[index].isSelected" @click="handleSelectTitle(index)"/>
                <font-awesome-icon v-if="showDeleteButton" class="delete-title-icon" icon="fa-solid fa-trash" @click="handleDeleteTitle(index)"/>
            </div>
            <AddTitleButton @click="handleAddTitle"/>
        </div>
    </div>
</template>
<script>
import AddTitleButton from '@/components/AddTitleButton.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import InputBox from '@/components/InputBox.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "TitleSection",
    components: {
        SectionTitle,
        AddTitleButton,
        InputBox,
    },
    computed: {
        ...mapGetters('titles', ['getTitles']),
        titles() {
            return this.getTitles;
        },
        showDeleteButton() {
            return this.titles.length > 1;
        },
    },
    methods: {
        ...mapActions('titles', ["addTitle", "removeTitle", "selectTitle"]),
        handleAddTitle() {
            this.addTitle({
                value: "",
                isSelected: false,
            });
        },
        handleDeleteTitle(index) {
            this.removeTitle(index);
        },
        handleSelectTitle(index) {
            this.selectTitle(index);
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
</style>