<template>
	<div class="button-container">
		<i class="fa-solid fa-moon"></i>
		<input
			@click="toggleTheme"
			id="toggle"
			type="checkbox"
			:checked="isLightTheme" />
		<label for="toggle"></label>
		<i class="fa-solid fa-sun"></i>
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const isLightTheme = ref(false);

const toggleTheme = () => {
	const newTheme = isLightTheme.value ? 'dark' : 'light';
	isLightTheme.value = !isLightTheme.value;
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
};


onMounted(() => {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		document.documentElement.setAttribute('data-theme', savedTheme);
		isLightTheme.value = savedTheme === 'light';
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
});
</script>
<style scoped>
.button-container {
	background-color: var(--header-background-color);
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	border-radius: 8px;
	gap: 2rem;
}
label {
	display: block;
	width: 50px;
	height: 28px;
	background-color: var(--button-color-primary);
	border-radius: 100px;
	position: relative;
	cursor: pointer;
}
label::before {
	content: '';
	position: absolute;
	width: 20px;
	height: 20px;
	background-color: var(--button-text-color-primary);
	border-radius: 50%;
	margin: 4px;
	transition: 0.3s ease-out;
}
input:checked + label {
	background-color: var(--button-color-secondary);
}
input:checked + label::before {
	background-color: var(--button-text-color-secondary);
	transform: translateX(22px);
}
input {
	display: none;
}
i {
	font-size: 2rem;
}
</style>
