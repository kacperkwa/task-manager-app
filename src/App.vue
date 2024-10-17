<template>
	<TheHeader />
	<router-view />
	<button @click="toggleTheme">change</button>
</template>

<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';

const toggleTheme = () => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', newTheme);

	localStorage.setItem('theme', newTheme);
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
	document.documentElement.setAttribute('data-theme', savedTheme);
}
</script>
<style scoped></style>
