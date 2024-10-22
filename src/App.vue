<template>
	<TheHeader />
	<router-view />
</template>

<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';
import { useUserStore } from './stores/userAuthStore';
import { onMounted } from 'vue';
const userStore = useUserStore();

onMounted(() => {
	userStore.fetchUser();
});
</script>
<style scoped>
button {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
}
</style>
