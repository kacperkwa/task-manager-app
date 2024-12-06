<template>
	<main>
		<h1>Hi {{ userStore.user?.userName }}!</h1>
		<p>Create a board and manage your tasks!</p>
		<button @click="openBoardForm" class="primary-button">
			Create Board
		</button>
	</main>
</template>
<script setup lang="ts">
import { useBoardStore } from '../stores/boardStore';
import { useUserStore } from '../stores/userAuthStore';
const boardStore = useBoardStore();
const userStore = useUserStore();

const openBoardForm = () => {
	boardStore.openBoardForm();
};
</script>
<style scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 100%;
	height: 100vh;
}
.primary-button {
	margin-top: 2rem;
	padding: 1rem 2rem;
}
</style>
