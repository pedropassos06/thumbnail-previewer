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
					<p class="upload-subheader">Please upload file in .jpeg or .png format and make</p>
					<p class="upload-subheader">sure the file size is under 2 MB.</p>
					<p v-if="wrongFileUploaded" class="upload-subheader-alert">*make sure you are uploading .jpeg or .png*</p>
					<br v-else />
				</div>
				<div v-if="!thumbnails || !thumbnails.length" class="drop-zone">
					<DropZone
						@files-dropped="handleFilesDropped"
						text="Format: .jpeg, .png & Max file size: 2 MB"
					/>
				</div>
				<div v-else class="drop-zone">
					<ValidDropZone 
						:files="thumbnails" 
						@files-dropped="handleFilesDropped" 
					/>
				</div>
				<div class="upload-buttons">
					<ActionButton
						@click="handleButtonClick(BUTTON_TYPES.CANCEL)"
						backgroundColor="#FFFFFF"
						textColor="#000000"
						stroke="#E6E7EA"
					>
						Cancel
					</ActionButton>
					<ActionButton
						@click="handleButtonClick(BUTTON_TYPES.DONE)"
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
import { mapActions, mapGetters } from "vuex";
import ActionButton from "@/components/UI/ActionButton.vue";
import DropZone from "@/components/LandingPage/DropZone.vue";
import ValidDropZone from "@/components/LandingPage/ValidDropZone.vue";

const BUTTON_TYPES = {
	CANCEL: 'cancel',
	DONE: 'done'
};

export default {
	components: {
		ActionButton,
		DropZone,
		ValidDropZone,
	},
	data() {
		return {
			wrongFileUploaded: false,
			BUTTON_TYPES,
		};
	},
	computed: {
		...mapGetters('thumbnails', ["getThumbnails"]),
		thumbnails() {
			return this.getThumbnails;
		}
	},
	methods: {
		...mapActions('thumbnails', ["updateThumbnails"]),
		handleFilesDropped(files) {
			const thumbnails = files.map(file => {
				file.isSelected = false;
				return file;
			})
			this.wrongFileUploaded = thumbnails.length === 0;
			this.updateThumbnails(thumbnails);
		},
		handleButtonClick(type) {
			if (type === this.BUTTON_TYPES.CANCEL) {
				this.updateThumbnails([]);
			} else if (type === this.BUTTON_TYPES.DONE) {
				this.goToPreview();
			}
		},
		goToPreview() {
			this.$router.push({ name: "Preview" });
		}
	},
};
</script>

<style scoped>
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
	gap: 20px;
	background: white;
	height: 600px;
	width: 550px;
	padding: 7%;
	border-radius: 2%;
	stroke: #E6E7EA;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10);
}

.upload-header {
	color: #181D27;
	font-size: 1.5rem;
	font-weight: bold;
}

.upload-subheader {
	color: #6C606C;
	font-weight: medium;
}

.header-section {
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
}

.header-text {
	font-size: 7rem;
	line-height: 85.5%;
	letter-spacing: -0.06em;
	font-weight: bold;
}

.subheader-text {
	font-size: 1.6rem;
	line-height: 118.5%;
	letter-spacing: -0.02em;
	font-weight: medium;
}

.footer-text {
	font-size: 1.6rem;
	line-height: 118.5%;
	letter-spacing: -0.05em;
	font-weight: bold;
}

.upload-buttons {
	display: flex;
	justify-content: space-between;
	gap: 1.8rem;
}

.drop-zone {
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.upload-subheader-alert {
	color: #FF0000;
	font-weight: medium;
}
</style>
