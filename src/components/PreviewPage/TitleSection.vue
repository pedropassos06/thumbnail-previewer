<template>
    <div class="w-full text-black flex flex-col gap-2.5">
        <SectionTitle>Titles</SectionTitle>
        <div class="max-h-40 overflow-y-auto">
            <div v-for="(_, index) in titles" class="flex items-center w-full">
                <InputBox v-model="titles[index].value" placeholder="Enter title..." :selected="titles[index].isSelected" @click="handleSelectTitle(index)"/>
                <font-awesome-icon v-if="showDeleteButton" class="cursor-pointer text-gray-500 hover:text-red-500" icon="fa-solid fa-trash" @click="handleDeleteTitle(index)"/>
            </div>
        </div>
        <ActionButton type="tertiary" @click="handleAddTitle"><font-awesome-icon class="plus-icon" icon="fa-solid fa-plus" /></ActionButton>
    </div>
</template>

<script>
import SectionTitle from '@/components/UI/SectionTitle.vue';
import InputBox from '@/components/UI/InputBox.vue';
import ActionButton from '../UI/ActionButton.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "TitleSection",
    components: {
        SectionTitle,
        InputBox,
        ActionButton,
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