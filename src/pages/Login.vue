<template>
	<div class="login-page">
		<main class="login-page__main">
			<h1 class="login-page__title">Welcome to taskMate!</h1>
			<p class="login-page__info">
				To access all features and start managing your tasks, please log in
				to your account. If you're new here, don't worry — creating an
				account is quick and easy! Sign up now and take control of your
				tasks with ease.
			</p>
			<div class="login-page__button-container">
				<button
					class="login-page__button primary-button"
					@click="openLoginModal(true)">
					Log in
				</button>
				<button
					@click="openLoginModal(false)"
					class="login-page__button secondary-button">
					Sign up
				</button>
			</div>

			<LoginModal
				v-if="isLogingModalOpen"
				@closePanel="closeLoginModal"
				:isLoginAction="isLoginAction"
				@changeAction="onChangeAction"></LoginModal>
		</main>
	</div>
</template>

<script setup lang="ts">
import LoginModal from '../auth/LoginModal.vue';
import { ref } from 'vue';

const isLoginAction = ref(true);
const isLogingModalOpen = ref(false);
const openLoginModal = (isLoginValue: boolean) => {
	isLogingModalOpen.value = true;
	isLoginAction.value = isLoginValue;
};
const onChangeAction = () => {
	isLoginAction.value = !isLoginAction.value;
};
const closeLoginModal = () => {
	isLogingModalOpen.value = false;
};
</script>

<style scoped>
.login-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding-top: 4rem;
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
	justify-content: center;
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
