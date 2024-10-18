import { defineStore } from 'pinia';
import { auth } from '../firebaseConfig';
import router from '../router/index';
import {
	UserCredential,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword
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
				router.push('/home');
				console.log('User registered:', this.user);
			} catch (error) {
				console.error(error);
				throw error;
			}
		},
		async signIn(userData: { email: string; password: string }) {
			try {
				const userCredential: UserCredential =
					await signInWithEmailAndPassword(
						auth,
						userData.email,
						userData.password
					);
				this.user = {
					id: userCredential.user.uid,
					email: userCredential.user.email || '',
					userName: userCredential.user.displayName || ''
				};
				this.isLoggedIn = true;
				router.push('/home');
				console.log('User logged in:', this.user, this.user.id);
			} catch (error) {
				console.error(error);
				throw error;
			}
		}
	}
});
