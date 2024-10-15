<template>
	<div class="overlay" @click="closeLoginModal"></div>
	<div class="login-panel">
		<h2 class="login-panel__title">
			{{ props.isLogIn ? 'Your Tasks Await!' : 'Join the TaskMate Family!' }}
		</h2>
		<p class="login-panel__info">
			{{
				props.isLogIn
					? `We’re thrilled to see you again! Dive back into your organized world of
			tasks and projects, where every detail matters. With TaskMate, managing
			your workload has never been easier!`
					: `Ready to take your task management to the next level? Signing up is the first step toward a more organized and productive life! With TaskMate, you’ll have the tools to conquer your to-do list and achieve your goals.`
			}}
		</p>
		<form class="login-panel__form">
			<label for="email">Email Adress:</label>
			<input type="text" id="email" />
			<label v-if="!props.isLogIn" for="username">User name:</label>
			<input v-if="!props.isLogIn" type="text" id="username" />
			<label for="password">Password:</label>
			<input type="password" id="password" />
			<label v-if="!props.isLogIn" for="confirm-password"
				>Confirm Password:</label
			>
			<input v-if="!props.isLogIn" type="password" id="confirm-password" />
		</form>
		<div class="login-panel__button-container">
			<button class="login-panel__button primary-button">
				{{ props.isLogIn ? `Log In` : `Sign Up` }}
			</button>
			<p>
				{{
					isLogIn ? `Don't have an account?` : `Already have an account?`
				}}
			</p>
			<button
				@click="changeAction"
				class="login-panel__button secondary-button">
				{{ isLogIn ? `Sign Up instead!` : `Log In instead!` }}
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
	isLogIn: Boolean
});
// interface LoginState {
// 	email: string;
// 	password: string;
// }
// interface SignupState {
// 	email: string;
// 	userName: string;
// 	password: string;
// 	confirmPassword: string;
// }
const emit = defineEmits(['closePanel', 'changeAction']);
const closeLoginModal = () => {
	emit('closePanel');
};
const changeAction = () => {
	emit('changeAction');
};
</script>
<style scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
}
.login-panel {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--background-color);
	padding: 2rem;
	border-radius: 0.8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	min-width: 320px;
	max-width: 400px;
	z-index: 1001;
}
.login-panel__info {
	line-height: 1.8rem;
	text-align: center;
}
.login-panel__form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
}
.login-panel__form input {
	padding: 1rem;
	border-radius: 0.5rem;
	border: 1px solid var(--input-border-color);
}
.login-panel__button-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
}
.login-panel__button {
	padding: 1rem;
}
.login-panel__button-container p {
	text-align: center;
}
</style>
