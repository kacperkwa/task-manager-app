<template>
	<div class="card">
		<h2>{{ props.board.title }}</h2>
		<button class="primary-button">Go to the board!</button>
	</div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import type { Board } from '../types/boardTypes';
const props = defineProps<{ board: Board }>();
</script>
<style scoped>
.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4rem;
	padding: 2rem;
	width: 200px;
	height: 200px;
	background-color: rgba(25, 21, 32, 0.051);
	border-radius: 50%;
	backdrop-filter: blur(10px);
}
.primary-button {
	padding: 1rem;
}
</style>
