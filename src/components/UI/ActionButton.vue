<template>
	<button :class="buttonClasses" class="action-button">
		<slot />
	</button>
</template>

<script>
export default {
  	name: "ActionButton",
  	props: {
		type: {
			type: String,
			default: "primary",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		buttonClasses() {
			return {
				"action-button--primary": this.type === "primary",
				"action-button--secondary": this.type === "secondary",
				"action-button--tertiary": this.type === "tertiary",
			}
		}
	},
};
</script>

<style scoped>
.action-button:hover {
  	opacity: 0.8;
}

.action-button {
	cursor: pointer;
	width: 100%;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10);
	border-radius: 10px;
	transition: all 0.3s ease;
}

.action-button--primary {
	background-color: #FF0000;
	color: #FFFFFF;
	border: none;
	padding: 10px 20px;
}

.action-button--secondary {
	background-color: #FFFFFF;
	color: #000000;
	border: 1px solid #E6E7EA;
	padding: 10px 20px;
}

.action-button--tertiary {
	background-color: #D5D5D5;
	color: #6F6F6F;
	border: 1.2px solid transparent;
	padding: 8px 20px;
}
</style>
