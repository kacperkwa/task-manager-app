<template>
	<TheHeader />
	<BoardForm v-if="boardStore.isBoardFormOpen" />
	<router-view />
</template>

<script lang="ts" setup>
import BoardForm from './components/BoardForm.vue';
import TheHeader from './components/TheHeader.vue';
import { ref } from 'vue';
import { useUserStore } from './stores/userAuthStore';
import { useBoardStore } from './stores/boardStore';
import { onMounted } from 'vue';
const userStore = useUserStore();
const boardStore = useBoardStore();

const isLoading = ref(true);
onMounted(async () => {
	const savedTheme = localStorage.getItem('theme');
	const theme = savedTheme || 'dark';
	document.documentElement.setAttribute('data-theme', theme);
});

async function initializeApp() {
	await userStore.fetchUser();

	if (userStore.isLoggedIn) {
		await boardStore.fetchBoards();
	}

	isLoading.value = false;
}

initializeApp();
</script>
