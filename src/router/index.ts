import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/pages/Login.vue';
import Home from '@/pages/Home.vue';
import { useUserStore } from '../stores/userAuthStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: true
		}
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_APP_BASE_URL || '/'),
	routes
});

router.beforeEach(async (to, _, next) => {
	const userStore = useUserStore();

	await new Promise(resolve => {
		onAuthStateChanged(auth, user => {
			if (user) {
				userStore.user = {
					id: user.uid,
					email: user.email || '',
					userName: user.displayName || ''
				};
				userStore.isLoggedIn = true;
			} else {
				userStore.user = null;
				userStore.isLoggedIn = false;
			}
			resolve(user);
		});
	});

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!userStore.isLoggedIn) {
			next({ name: 'Login' });
		} else {
			next();
		}
	} else {
		if (to.name === 'Login' && userStore.isLoggedIn) {
			next({ name: 'Home' });
		} else {
			next();
		}
	}
});
export default router;
