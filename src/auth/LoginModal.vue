<template>
	<div class="overlay" @click="closeLoginModal"></div>
	<div class="login-panel">
		<h2 class="login-panel__title">
			{{
				props.isLoginAction
					? 'Your Tasks Await!'
					: 'Join the TaskMate Family!'
			}}
		</h2>
		<p class="login-panel__info">
			{{
				props.isLoginAction
					? `We’re thrilled to see you again! Dive back into your organized world of
			tasks and projects, where every detail matters. With TaskMate, managing
			your workload has never been easier!`
					: `Ready to take your task management to the next level? Signing up is the first step toward a more organized and productive life! With TaskMate, you’ll have the tools to conquer your to-do list and achieve your goals.`
			}}
		</p>
		<form @submit.prevent="handleSubmit" class="login-panel__form">
			<label for="email">Email Adress:</label>
			<input
				:class="{ 'input-error': !isValid }"
				v-model="email"
				type="text"
				id="email"
				placeholder="joenowak@xyz.com" />

			<label v-if="!props.isLoginAction" for="username">User name:</label>
			<input
				:class="{ 'input-error': !isValid }"
				v-model="userName"
				v-if="!props.isLoginAction"
				type="text"
				id="username"
				placeholder="Joe" />

			<label for="password">Password:</label>
			<input
				:class="{ 'input-error': !isValid }"
				v-model="password"
				type="password"
				id="password"
				placeholder="Your password" />

			<label v-if="!props.isLoginAction" for="confirm-password"
				>Confirm Password:
			</label>
			<input
				:class="{ 'input-error': !isValid }"
				v-model="confirmPassword"
				v-if="!props.isLoginAction"
				type="password"
				id="confirm-password"
				placeholder="At least 6 characters long" />
		</form>
		<div class="login-panel__button-container">
			<button
				@click="handleSubmit"
				class="login-panel__button primary-button">
				{{ props.isLoginAction ? `Log In` : `Sign Up` }}
			</button>

			<p>
				{{
					isLoginAction
						? `Don't have an account?`
						: `Already have an account?`
				}}
			</p>
			<button
				@click="changeAction"
				class="login-panel__button secondary-button">
				{{ isLoginAction ? `Sign Up instead!` : `Log In instead!` }}
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();

const email = ref('');
const userName = ref('');
const password = ref('');
const confirmPassword = ref('');
const isValid = ref(true);

const props = defineProps({
	isLoginAction: Boolean
});

const emit = defineEmits(['closePanel', 'changeAction']);
const closeLoginModal = () => {
	emit('closePanel');
};
const changeAction = () => {
	emit('changeAction');
	isValid.value = true;
};
const formValidation = (): boolean => {
	isValid.value = true;
	if (
		!email.value ||
		!password.value ||
		(!props.isLoginAction && !userName.value)
	) {
		console.log('Please fill in all fields');
		isValid.value = false;
		return false;
	} else if (
		!props.isLoginAction &&
		password.value !== confirmPassword.value
	) {
		console.log('Passwords do not match');
		return false;
		isValid.value = false;
	} else if (!email.value.includes('@')) {
		console.log('Invalid email');
		isValid.value = false;
		return false;
	} else if (password.value.length < 6) {
		console.log('Password must be at least 6 characters long');

		return false;
	}
	return true;
};
const handleSubmit = () => {
	if (!formValidation()) return;
	if (props.isLoginAction) {
		console.log('Logging in...');
	} else {
		try {
			userStore.signUp({
				email: email.value,
				password: password.value,
				userName: userName.value
			});
			console.log('Signing up succes');
		} catch (error) {
			console.error(error);
		}
	}
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
.login-panel__form .input-error {
	border: 2px solid red;
}
</style>
