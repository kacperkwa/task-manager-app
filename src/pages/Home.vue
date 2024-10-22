<template>
	<main>
		<h1>Hi {{ userStore.user?.userName }}!</h1>
		<p>Create a board and manage your tasks!</p>
	</main>
</template>
<script setup lang="ts">
import { useUserStore } from '../stores/userAuthStore';
const userStore = useUserStore();
</script>
<style scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
}
</style>
