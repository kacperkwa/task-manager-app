<template>
	<div class="board-form__container" @click="closeBoardForm">
		<form class="board-form" @click.stop>
			<h3>Add New Board</h3>
			<label for="board-form__input">Board Name</label>
			<input
				v-model="boardName"
				type="text"
				class="board-form__input"
				id="board-form__input"
				placeholder="e.g. Platform Launch" />

			<label for="columns">Board Columns</label>
			<div
				v-for="(column, index) in columns"
				:key="index"
				class="board-form__input-container">
				<input
					v-model="column.name"
					type="text"
					class="board-form__input"
					id="columns"
					placeholder="e.g. Todo" />
				<p @click="removeColumn(index)">X</p>
			</div>

			<button type="button" class="secondary-button" @click="addColumn">
				Add New Column
			</button>
			<button type="button" class="primary-button" @click="createBoard">
				Create New Board
			</button>
		</form>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useBoardStore } from '../stores/boardStore';

const boardStore = useBoardStore();
const boardName = ref('');
const columns = ref([{ id: uuidv4(), name: '', tasks: [] }]);
const closeBoardForm = () => {
	boardStore.closeBoardForm();
};
const addColumn = () => {
	columns.value.push({ id: uuidv4(), name: '', tasks: [] });
};
const createBoard = () => {
	const columnData = columns.value.map(col => ({
		id: col.id,
		name: col.name,
		tasks: []
	}));
	boardStore.createBoard(boardName.value, columnData);
	closeBoardForm();
};
const removeColumn = (index: number) => {
	columns.value.splice(index, 1);
};
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
.board-form__input-container p {
	cursor: pointer;
}
label {
	margin-top: 2rem;
}
</style>
