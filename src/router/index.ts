import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/pages/Login.vue';
import Home from '../pages/Home.vue';
import { useUserStore } from '../stores/userAuthStore';

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
	history: createWebHistory(),
	routes
});

router.beforeEach((to, _, next) => {
	const userStore = useUserStore();
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
