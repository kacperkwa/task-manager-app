<template>
	<div @click="closeNav" class="overlay"></div>
	<nav class="navigation">
		<div class="navigation__container">
			<h3 class="navigation__boards-counter">all boards (3)</h3>
			<ul class="navigation__list">
				<li class="navigation__list-item selected-item">
					+ Platform Lunch
				</li>
				<li class="navigation__list-item">+ Platform Lunch</li>
				<li class="navigation__list-item">+ Platform Lunch</li>
			</ul>
			<button @click="openBoardForm" class="navigation__create-board-button">
				+ Create New Board
			</button>

			<ToggleTheme />

			<button
				@click="signOut"
				class="navigation__logout-button primary-button">
				Logout
			</button>
		</div>
	</nav>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';
import { useUserStore } from '../stores/userAuthStore';
import { useBoardStore } from '../stores/boardStore';
import ToggleTheme from '../UI/ToggleTheme.vue';

const boardStore = useBoardStore();
const useAuthStore = useUserStore();
const emit = defineEmits(['closeNav']);
const signOut = () => {
	useAuthStore.signOut();
	closeNav();
};
const closeNav = () => {
	emit('closeNav');
};
const openBoardForm = () => {
	boardStore.openBoardForm();
	closeNav();
};
</script>
<style scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--overlay-color);
	z-index: 100;
}
.navigation {
	position: fixed;
	top: 8rem;
	left: 50%;
	transform: translateX(-50%);
	background-color: var(--background-color);
	width: 80%;
	max-width: 320px;
	max-height: 90vh;
	padding: 2rem 0;
	border-radius: 8px;
	color: var(--text-color-secondary);
	z-index: 1000;
}
.navigation__container {
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}
.navigation__boards-counter {
	text-transform: uppercase;
	font-size: 1.2rem;
	letter-spacing: 0.3rem;
}
.navigation__list {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-self: flex-start;
}
.navigation__list-item {
	padding: 1.2rem 3rem;
	font-size: 1.5rem;
}
.selected-item {
	color: var(--text-color);
	background-color: var(--button-color-primary);
	border-radius: 0 25px 25px 0;
}
.navigation__create-board-button {
	border: none;
	background-color: transparent;
	color: var(--button-text-color-secondary);
	font-size: 1.5rem;
}
.navigation__logout-button {
	padding: 1rem 2rem;
}
</style>
