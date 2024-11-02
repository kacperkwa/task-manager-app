<template>
	<div class="board-form__container" @click="closeBoardForm">
		<div tabindex="0" @focus="focusLastElement"></div>
		<form class="board-form" @click.stop>
			<h3>Add New Board</h3>
			<label for="board-form__input">Board Name</label>
			<input type="text" class="board-form__input" />

			<label for="columns">Board Columns</label>
			<div class="board-form__input-container">
				<input type="text" class="board-form__input" id="columns" />
				<p>X</p>
			</div>

			<button class="secondary-button">Add New Column</button>
			<button class="primary-button">Create New Board</button>
		</form>
		<div tabindex="0" @focus="focusFirstElement"></div>
	</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/boardStore';
const boardStore = useBoardStore();
const closeBoardForm = () => {
	boardStore.closeBoardForm();
};

let firstFocusableElement: HTMLElement | null = null;
let lastFocusableElement: HTMLElement | null = null;

const focusFirstElement = () => {
	(firstFocusableElement as unknown as HTMLElement)?.focus();
};
const focusLastElement = () => {
	(lastFocusableElement as unknown as HTMLElement)?.focus();
};

onMounted(() => {
	const focusableElements = document.querySelectorAll(
		'.board-form input, .board-form button, .board-form a'
	);

	if (focusableElements.length > 0) {
		firstFocusableElement = focusableElements[0] as HTMLElement;
		lastFocusableElement = focusableElements[
			focusableElements.length - 1
		] as HTMLElement;
	}
	firstFocusableElement?.focus();
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			closeBoardForm();
		}
	});
});
</script>
<style scoped>
.board-form__container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--overlay-color);
	border-radius: 8px;
	color: var(--text-color-primary);
	z-index: 1000;
}
.board-form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
	width: 320px;
	background-color: var(--background-color);
	border-radius: 8px;
}
.board-form__input {
	padding: 1rem;
	border-radius: 4px;
	border: 1px solid var(--input-border-color);
	color: var(--text-color);
	background-color: transparent;
}
.board-form__input:focus {
	outline: none;
	border-color: var(--input-focus-color);
}
.primary-button,
.secondary-button {
	padding: 1.2rem;
	margin: 0.5rem 0;
}
.board-form__input-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}
label {
	margin-top: 2rem;
}
</style>
