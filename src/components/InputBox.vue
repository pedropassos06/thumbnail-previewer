<template>
    <div class="input-wrapper">
        <p v-if="selected" class="selected-indicator">selected</p>
        <input 
            :type="type" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="title-input"
            :class="{'selected-input': selected}" 
        />
    </div>
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
        },
        modelValue: {
            type: String,
            default: ''
        },
        selected: {
            type: Boolean,
            default: false,
        },
    }
}
</script>
<style>
.input-wrapper {
    position: relative;
    width: 100%;

}

.title-input {
    border-radius: 10px;
    border: 1.2px solid black;
    padding: 9px;
    width: 100%;
}

.selected-input {
    border: 1.6px solid #FF0000;
}

.selected-indicator {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #FF0000;
    font-size: 0.8rem;
    padding: 0 10px;
}
</style>