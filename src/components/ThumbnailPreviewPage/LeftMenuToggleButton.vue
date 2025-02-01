<template>
    <div class="toggle-button-component">
        <p 
            class="toggle-button"
            :class="{ selected: selectedButton === BUTTON_TYPES.MAIN_PAGE }"
            @click="handleButtonClick(BUTTON_TYPES.MAIN_PAGE)"
        >
            Main Page
        </p>
        <p 
            class="toggle-button"
            :class="{ selected: selectedButton === BUTTON_TYPES.SEARCH }"
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

<style>
.toggle-button-component {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    border-radius: 100px;
    background-color: #E6E7EA;
    gap: 2%;
    width: 100%;
    padding: 1%;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.1));
}

.toggle-button {
    display: flex;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    padding: 2%;
    width: 100%;
    border-radius: 100px;
}

.toggle-button.selected {
    background-color: red;
    color: white;
    font-weight: bold;
}
</style>