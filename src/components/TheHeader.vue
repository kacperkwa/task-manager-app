<template>
	<header class="header">
		<div class="header__left-container">
			<img :class="logo" :src="logoSrc" alt="logo" v-show="logoLoaded" />
			<div class="header__board-name" v-if="userStore.isLoggedIn">
				Board Name
			</div>
			<ArrowButton
				v-if="userStore.isLoggedIn"
				@click="openNav"
				:isRotated="rotateBtn()" />
		</div>
		<div class="header__right-container">
			<AddButton v-if="userStore.isLoggedIn" />
			<DottedButton v-if="userStore.isLoggedIn" />
		</div>
		<NavigationMobile v-if="isNavOpen" @closeNav="closeNav" />
	</header>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useUserStore } from '../stores/userAuthStore';
import ArrowButton from '../UI/ArrowButton.vue';
import DottedButton from '../UI/DottedButton.vue';
import AddButton from '../UI/AddButton.vue';
import NavigationMobile from './NavigationMobile.vue';

const userStore = useUserStore();
const logoLoaded = ref(false);
const isNavOpen = ref(false);
let logo = ref('header-log-small');
let logoSrc = ref('/img/logo-taskmate.png');

const openNav = () => {
	isNavOpen.value = true;
};
const rotateBtn = () => {
	if (isNavOpen.value) {
		return true;
	} else {
		return false;
	}
};
const closeNav = () => {
	isNavOpen.value = false;
};
const updateLogo = () => {
	const windowWidth = window.innerWidth;

	const newLogo =
		windowWidth < 768 && userStore.isLoggedIn
			? '/img/logo-taskmate-bulb.png'
			: '/img/logo-taskmate.png';

	const img = new Image();
	img.src = logoSrc.value;
	img.onload = () => {
		logoLoaded.value = true;
	};

	logo.value =
		windowWidth < 768 && userStore.isLoggedIn
			? 'header-logo-small'
			: 'header-logo';

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
watch(
	() => userStore.isLoggedIn,
	() => {
		updateLogo();
	}
);

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
	margin-bottom: 2rem;
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
@media (max-width: 768px) {
	.header-logo {
		width: 160px;
	}
}
</style>
