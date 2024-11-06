import { defineStore } from 'pinia';
import { db } from '../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useUserStore } from './userAuthStore';
import { Board, Column, Task, Subtask } from '../types/boardTypes';

export const useBoardStore = defineStore({
	id: 'boardStore',

	state: () => ({
		isBoardFormOpen: false,
		boards: [] as Board[]
	}),
	actions: {
		openBoardForm() {
			this.isBoardFormOpen = true;
		},
		closeBoardForm() {
			this.isBoardFormOpen = false;
		},
		async createBoard(
			title: string,
			columns: Column[],
			isCollaborative = false
		) {
			const userStore = useUserStore();
			if (!userStore.user) return;

			const newBoard: Omit<Board, 'id'> = {
				title,
				columns,
				isCollaborative
			};
			try {
				const boardRef = await addDoc(collection(db, 'boards'), {
					...newBoard,
					createdAt: serverTimestamp(),
					userId: userStore.user.id
				});
				console.log('board created with ID:', boardRef.id);
			} catch (error) {
				console.error('Error creating board:', error);
			}
		}
	}
});
