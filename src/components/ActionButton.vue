<template>
	<button :style="buttonStyles" class="action-button" @click="handleClick">
		<slot />
	</button>
</template>

<script>
export default {
  	name: "ActionButton",
  	props: {
		width: {
		type: String,
		default: "auto",
		},
		height: {
		type: String,
		default: "auto",
		},
		backgroundColor: {
		type: String,
		default: "#FF0000",
		},
		textColor: {
		type: String,
		default: "#FFFFFF",
		},
		stroke: {
		type: String,
		default: null,
		},
		hasDropShadow: {
		type: Boolean,
		default: true,
		},
	},
	computed: {
		buttonStyles() {
		return {
			width: "100%",
			height: this.height,
			backgroundColor: this.backgroundColor,
			color: this.textColor,
			border: this.stroke ? `1px solid ${this.stroke}` : "none",
			borderRadius: "10px",
			padding: "10px 20px",
			cursor: "pointer",
			boxShadow: this.hasDropShadow
			? "0px 2px 2px rgba(0, 0, 0, 0.10)"
			: "none",
			transition: "all 0.3s ease",
		};
		},
	},
	methods: {
		handleClick(event) {
		this.$emit("click", event);
		},
	},
};
</script>

<style scoped>
.action-button:hover {
  	opacity: 0.8;
}
</style>
