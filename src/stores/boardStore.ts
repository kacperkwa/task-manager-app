import { defineStore } from 'pinia';
import { db } from '../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useUserStore } from './userAuthStore';
import { Board, Column } from '../types/boardTypes';

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

		async createBoard(title: string, columns: Column[]) {
			const userStore = useUserStore();
			if (!userStore.user) return;

			const newBoard: Omit<Board, 'id'> = {
				title,
				columns,
				isCollaborative: null
			};
			try {
				const boardRef = await addDoc(
					collection(db, `Users/${userStore.user.id}/Boards`),
					{
						...newBoard,
						createdAt: serverTimestamp(),
						userId: userStore.user.id
					}
				);
				console.log('board created with ID:', boardRef.id);
			} catch (error) {
				console.error('Error creating board:', error);
			}
		}
	}
});