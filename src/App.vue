<template>
	<TheHeader />
	<router-view />
	<button @click="toggleTheme">change</button>
</template>

<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';
import { useUserStore } from './stores/userAuthStore';
import { onMounted } from 'vue';
const userStore = useUserStore();

onMounted(() => {
	userStore.fetchUser();
	console.log('Home page mounted');
});
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
<style scoped>
button {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
}
</style>
