<template>
	<div class="login-page">
		<header class="login-page__header">taskMate
			<img src="../../assets/img/logo.png" alt="">
		</header>
		<main class="login-page__main">
			<h1 class="login-page__title">Welcome to taskMate!</h1>
			<p class="login-page__info">
				To access all features and start managing your tasks, please log in
				to your account. If you're new here, don't worry — creating an
				account is quick and easy! Sign up now and take control of your
				tasks with ease.
			</p>
			<div class="login-page__button-container">
				<button class="login-page__button primary-button">Log in</button>
				<button class="login-page__button secondary-button">Sign up</button>
			</div>
		</main>
	</div>
</template>

<script setup lang="js"></script>

<style scoped>
.login-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}
.login-page__header {
	position: absolute;
	top: 0;
	left: 0;
}
.login-page__title {
	text-align: center;
}
.login-page__info {
	text-align: justify;
}
.login-page__main {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 400px;
	padding: 0 2rem;
}
.login-page__button-container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
.login-page__button {
	padding: 1.2rem;
	border-radius: 2rem;
	cursor: pointer;
}
</style>
