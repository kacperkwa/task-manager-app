import { defineStore } from 'pinia';
import { auth } from '../firebaseConfig';
import {
	UserCredential,
	createUserWithEmailAndPassword,
	updateProfile
} from 'firebase/auth';
interface User {
	id: string;
	email: string;
	userName: string;
}
export const useUserStore = defineStore({
	id: 'userStore',
	state: () => ({
		user: null as User | null,
		isLoggedIn: false
	}),

	actions: {
		async signUp(userData: {
			email: string;
			password: string;
			userName: string;
		}) {
			try {
				const userCredential: UserCredential =
					await createUserWithEmailAndPassword(
						auth,
						userData.email,
						userData.password
					);
				if (auth.currentUser) {
					await updateProfile(auth.currentUser, {
						displayName: userData.userName
					});
				}
				this.user = {
					id: userCredential.user.uid,
					email: userCredential.user.email || '',
					userName: userData.userName
				};
				this.isLoggedIn = true;
				console.log('User registered:', this.user);
			} catch (error) {
				console.error(error);
			}
		}
	}
});
