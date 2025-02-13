<template>
    <input type="{{ type }}" :placeholder="placeholder" class="title-input" />
</template>
<script>
export default {
    name: 'InputBox',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Type something...'
        }
    }
}
</script>
<style>
.title-input {
    border-radius: 10px;
    border: 1.2px solid black;
    padding: 9px;
    width: 100%;
}
</style>