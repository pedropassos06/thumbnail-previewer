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
	</div>
</template>

<style>
.bg {
	background: linear-gradient(to bottom right, #D63B19 0%, #E61862 52%, #F77D25 100%);
	height: 100vh;
	width: 100%;
	padding: 5%;
}

.left-section {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 4%;
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
</style>
