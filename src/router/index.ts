import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/pages/Login.vue';
import Home from '../pages/Home.vue';
import { useUserStore } from '../stores/userStore';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: true
		}
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, _, next) => {
	const userStore = useUserStore();
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!userStore.isLoggedIn) {
			next({ name: 'Login' });
		} else if (
			to.matched.some(record => record.meta.requiresAuth) &&
			userStore.isLoggedIn
		) {
			next('/home');
		} else {
			next();
		}
	} else {
		next();
	}
});
export default router;
