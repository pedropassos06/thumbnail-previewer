<template>
	<div class="bg">
		<div class="left-section">
			<div class="header-section">
				<div class="header">
					<h1 class="header-text">Preview Your</h1>
					<h1 class="header-text">Thumbnail!</h1>
				</div>
				<div class="subheader">
					<h2 class="subheader-text">Ever wondered what your thumbnail would look</h2>
					<h2 class="subheader-text">like on the YouTube main page? Check it out! →</h2>
				</div>
			</div>
			<div class="footer">
				<h3 class="footer-text">No login required. No data collected.</h3>
			</div>
		</div>
		<div class="right-section">
			<div class="upload-section">
				<div class="upload-main-header">
					<h3 class="upload-header">Upload Thumbnail</h3>
					<p class="upload-subheader">Please upload file in jpeg or png format and make</p>
					<p class="upload-subheader">sure the file size is under 2 MB.</p>
				</div>
				<div class="drop-zone">
					<DropZone
						text="Format: .jpeg, .png & Max file size: 2 MB"
					/>
				</div>
				<div class="upload-buttons">
					<ActionButton
						width="120px"
						height="40px"
						backgroundColor="#FFFFFF"
						textColor="#000000"
						stroke="#E6E7EA"
					>
						Cancel
					</ActionButton>
					<ActionButton
						width="120px"
						height="40px"
						backgroundColor="#FF0000"
						textColor="#FFFFFF"
					>
						Done
					</ActionButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import DropZone from "@/components/DropZone.vue";

export default {
	components: {
		ActionButton,
		DropZone,
	},
};
</script>

<style>
.bg {
	background: linear-gradient(to bottom right, #D63B19 0%, #E61862 52%, #F77D25 100%);
	height: 100vh;
	width: 100%;
	padding: 6%;
	display: flex;
	justify-content: space-between;
}

.left-section {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
}

.right-section {
	justify-content: center;
	align-self: center;
	margin-right: 4%;
}

.upload-section {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	height: 600px;
	width: 550px;
	padding: 7%;
	border-radius: 22.5px;
	stroke: #E6E7EA;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10);
}

.upload-header {
	color: #181D27;
	font-size: 25px;
	font-weight: bold;
}

.upload-subheader {
	color: #6C606C;
	font-weight: medium;
}

.header-section {
	display: flex;
	flex-direction: column;
	gap: 25px;
}

.header-text {
	font-size: 112.4px;
	line-height: 85.5%;
	letter-spacing: -0.06em; /* -5% letter spacing */
	font-weight: bold;
}

.subheader-text {
	font-size: 25px;
	line-height: 118.5%;
	letter-spacing: -0.02em;
	font-weight: medium;
}

.footer-text {
	font-size: 25px;
	line-height: 118.5%;
	letter-spacing: -0.05em;
	font-weight: bold;
}

.upload-buttons {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}
</style>
