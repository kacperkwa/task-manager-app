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
}
.primary-button {
	padding: 1rem;
}
</style>
