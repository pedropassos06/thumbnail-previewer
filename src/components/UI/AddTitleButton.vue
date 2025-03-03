<template>
    <button class="add-title-button"><font-awesome-icon class="plus-icon" icon="fa-solid fa-plus" /></button>
</template>
<script>
export default {
    name: "AddTitleButton",
}
</script>
<style>
.add-title-button {
    border: 1.2px solid transparent;
    width: 100%;
    background-color: #D5D5D5;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 9px;
}

.plus-icon {
    font-size: 17px;
    color: #6F6F6F;
}
</style>