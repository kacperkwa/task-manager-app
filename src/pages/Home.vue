<template>
	<h1>Hi You Are logged in! {{ userStore.user?.userName }}</h1>
</template>
<script setup lang="ts">
import { useUserStore } from '../stores/userAuthStore';
const userStore = useUserStore();
</script>
<style scoped>
h1 {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
