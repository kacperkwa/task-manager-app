<template>
	<TheHeader />
	<BoardForm v-if="boardStore.isBoardFormOpen"></BoardForm>
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
onMounted(() => {
	const savedTheme = localStorage.getItem('theme');
	const theme = savedTheme || 'dark';
	document.documentElement.setAttribute('data-theme', theme);
	userStore.fetchUser();
	isLoading.value = false;
});
</script>
<style scoped>
button {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
}
</style>
