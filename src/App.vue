<template>
	<loginPage />
	<button @click="toggleTheme">change</button>
</template>

<script lang="ts" setup>
import loginPage from './components/login/loginPage.vue';

const toggleTheme = () => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', newTheme);

	// Zapisz preferencje w localStorage
	localStorage.setItem('theme', newTheme);
};

// Sprawdź localStorage przy montowaniu komponentu
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
	document.documentElement.setAttribute('data-theme', savedTheme);
}
</script>
<style scoped></style>
