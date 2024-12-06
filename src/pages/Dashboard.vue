<template>
	<div class="dashboard">
		<h1>Dashboard</h1>
		<p>Welcome to your dashboard!</p>
		<div v-if="boardStore.boards.length" class="swiper-container">
			<swiper
				:modules="modules"
				:slides-per-view="1"
				:space-between="50"
				:navigation="{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}"
				:pagination="{ clickable: true }">
				<swiper-slide v-for="board in boardStore.boards" :key="board.id">
					<BoardCard :board="board" />
				</swiper-slide>
			</swiper>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<div v-else>
			<p>No boards found.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useBoardStore } from '../stores/boardStore';
import { useUserStore } from '../stores/userAuthStore';
import BoardCard from '../components/BoardCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
const modules = [Navigation, Pagination];
const boardStore = useBoardStore();
const userStore = useUserStore();

onMounted(async () => {
	await userStore.fetchUser();
	if (userStore.isLoggedIn) {
		await boardStore.fetchBoards();
	}
});
</script>
<style scoped>
.dashboard {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding-top: 12rem;
}
.swiper-container {
	position: relative;
	width: 100%;
	max-width: 320px;
}
.swiper {
	width: 100%;
	max-width: 320px;
	/* padding: 4rem; */
	/* background-color: red; */
}
.swiper-button-prev,
.swiper-button-next {
	color: blue;
	position: absolute;
	top: 50%;
}
.swiper-button-prev {
	left: -20px;
}
.swiper-button-next {
	right: -20px;
}

.swiper-slide {
	display: flex;
	justify-content: center;
}
</style>
