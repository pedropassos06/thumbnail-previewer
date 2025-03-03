<!-- ConfirmationModal.vue -->
<template>
    <transition name="modal-fade">
        <div v-if="modelValue" class="modal-overlay" @click.self="close">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>{{ title }}</h3>
                    <button class="close-button" @click="close">&times;</button>
                </div>
                
                <div class="modal-body">
                    <p>{{ message }}</p>
                </div>
                
                <div class="modal-footer">
                    <button 
                        class="cancel-button" 
                        @click="close"
                    >
                        {{ cancelText }}
                    </button>
                    <button 
                        class="confirm-button" 
                        @click="confirm"
                    >
                        {{ confirmText }}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    name: 'ConfirmationModal',
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            default: 'Confirm Action'
        },
        message: {
            type: String,
            default: 'Are you sure you want to proceed?'
        },
        confirmText: {
            type: String,
            default: 'Confirm'
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        }
    },
    emits: ['update:modelValue', 'confirm', 'cancel'],
    methods: {
        close() {
        this.$emit('update:modelValue', false)
        this.$emit('cancel')
        },
        confirm() {
        this.$emit('confirm')
        this.$emit('update:modelValue', false)
        }
    },
}
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
  
.modal-content {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    max-width: 500px;
    width: 90%;
}
  
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
  
.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
}
  
.close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}
  
.confirm-button {
    background-color: #FF0000;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
  
.cancel-button {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
  
.modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.3s ease;
}
  
.modal-fade-enter-from, .modal-fade-leave-to {
    opacity: 0;
}
</style>