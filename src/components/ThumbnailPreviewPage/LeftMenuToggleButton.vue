<template>
    <div class="toggle-button-component">
        <p 
            class="toggle-button"
            :class="{ selected: selectedButton === 'MainPage' }"
            @click="handleButtonClick('MainPage')"
        >
            Main Page
        </p>
        <p 
            class="toggle-button"
            :class="{ selected: selectedButton === 'Search' }"
            @click="handleButtonClick('Search')"
        >
            Search
        </p>
    </div>
</template>

<script>
export default {
    name: "LeftMenuToggleButton",
    data() {
        return {
            selectedButton: 'MainPage',
        };
    },
    methods: {
        handleButtonClick(button) {
            this.selectedButton = button;
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
    width: 80%;
    padding: 1%;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.1));
}

.toggle-button {
    display: flex;
    justify-content: center;
    font-size: 20px;
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