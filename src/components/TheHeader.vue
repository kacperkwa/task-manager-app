<template>
	<header class="header">
		<div class="header__left-container">
			<img :class="logo" :src="logoSrc" alt="logo" v-show="logoLoaded" />
			<div class="header__board-name" v-if="userStore.isLoggedIn">
				Board Name
			</div>
			<ArrowButton />
		</div>
		<div class="header__right-container">
			<AddButton v-if="userStore.isLoggedIn" />
			<DottedButton v-if="userStore.isLoggedIn" />
		</div>
	</header>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useUserStore } from '../stores/userAuthStore';
import ArrowButton from '../UI/ArrowButton.vue';
import DottedButton from '../UI/DottedButton.vue';
import AddButton from '../UI/AddButton.vue';
const userStore = useUserStore();
const logoLoaded = ref(false);
let logo = ref('header-log-small');
let logoSrc = ref('/img/logo-taskmate.png');

const updateLogo = () => {
	const windowWidth = window.innerWidth;
	const newLogo =
		windowWidth < 768
			? '/img/logo-taskmate-bulb.png'
			: '/img/logo-taskmate.png';

	const img = new Image();
	img.src = logoSrc.value;
	img.onload = () => {
		logoLoaded.value = true;
	};

	logo.value = windowWidth < 768 ? 'header-logo-small' : 'header-logo';

	if (newLogo !== logoSrc.value) {
		logoLoaded.value = false;
		logoSrc.value = newLogo;
	}
};

onMounted(() => {
	updateLogo();
	window.addEventListener('resize', updateLogo);
});

watch(logoSrc, () => {
	const img = new Image();
	img.src = logoSrc.value;

	img.onload = () => {
		logoLoaded.value = true; //
	};
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateLogo);
});
</script>
<style scoped>
.header {
	background-color: var(--header-background-color);
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	max-height: 8rem;
	padding: 1rem 1.5rem;
	z-index: 1000;
}
.header-logo-small {
	width: 40px;
}
.header-logo {
	width: 190px;
}
.header__left-container,
.header__right-container {
	display: flex;
	align-items: center;
}
.header__right-container {
	gap: 1rem;
}
.header__board-name {
	font-size: 1.6rem;
	font-weight: 500;
	margin-left: 1rem;
}
</style>
