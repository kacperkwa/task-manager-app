<template>
	<header class="header">
		<div class="header__left-container">
			<img :src="logoSrc" alt="logo" />
			<div class="header__board-name" v-if="isLoggedIn">Board Name</div>
			<ArrowButton />
		</div>
		<div class="header__right-container">
			<AddButton v-if="isLoggedIn" />
			<DottedButton v-if="isLoggedIn" />
		</div>
	</header>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isLoggedIn = ref(false);
import ArrowButton from '../UI/ArrowButton.vue';
import DottedButton from '../UI/DottedButton.vue';
import AddButton from '../UI/AddButton.vue';

const logoSrc = ref('src/assets/img/logo-taskmate-bulb.png');
const updateLogo = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth < 768) {
		logoSrc.value = 'src/assets/img/logo-taskmate-bulb.png';
	} else {
		logoSrc.value = 'src/assets/img/logo-taskmate.png';
	}
};

onMounted(() => {
	updateLogo();
	window.addEventListener('resize', updateLogo);
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
.header img {
	width: 40px;
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
@media (min-width: 768px) {
	.header img {
		width: 190px;
	}
}
</style>
