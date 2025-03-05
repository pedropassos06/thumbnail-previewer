<template>
    <div class="flex justify-around items-center text-black rounded-full bg-[#E6E7EA] gap-2 w-full p-1 shadow-md">
        <p 
            class="flex justify-center font-size-4.5 cursor-pointer p-2 w-full rounded-full transition-all duration-200"
            :class="selectedButton === BUTTON_TYPES.MAIN_PAGE 
                ? 'bg-red-500 text-white font-bold' 
                : 'bg-transparent text-black'"
            @click="handleButtonClick(BUTTON_TYPES.MAIN_PAGE)"
        >
            Main Page
        </p>
        <p 
            class="flex justify-center font-size-4.5 cursor-pointer p-2 w-full rounded-full transition-all duration-200"
            :class="selectedButton === BUTTON_TYPES.SEARCH 
                ? 'bg-red-500 text-white font-bold' 
                : 'bg-transparent text-black'"
            @click="handleButtonClick(BUTTON_TYPES.SEARCH)"
        >
            Search
        </p>
    </div>
</template>

<script>
const BUTTON_TYPES = {
    MAIN_PAGE: 'MainPage',
    SEARCH: 'Search',
};
export default {
    name: "LeftMenuToggleButton",
    data() {
        return {
            selectedButton: BUTTON_TYPES.MAIN_PAGE,
        };
    },
    methods: {
        handleButtonClick(button) {
            this.selectedButton = button;
        },
    },
    computed: {
        BUTTON_TYPES() {
            return BUTTON_TYPES;
        },
    },
}
</script>