import { defineStore } from 'pinia';
// import { db } from '../firebaseConfig';
// import { ref, set, get, remove } from 'firebase/database';
// import { Board, Column, Task, Subtask } from '../types/boardTypes';

export const useBoardStore = defineStore({
	id: 'boardStore',

	state: () => ({
		isBoardFormOpen: false
	}),
	actions: {
		openBoardForm() {
			this.isBoardFormOpen = true;
		},
		closeBoardForm() {
			this.isBoardFormOpen = false;
		}
	}
});
