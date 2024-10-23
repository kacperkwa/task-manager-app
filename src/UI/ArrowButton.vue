<template>
	<button class="arrow-button">
		<i
			class="fa-solid fa-angle-down"
			:class="{ rotated: props.isRotated }"></i>
	</button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
	isRotated: Boolean
});
</script>

<style scoped>
.arrow-button {
	background-color: transparent;
	padding: 1rem;
}
.arrow-button:hover i {
	color: var(--button-color-hover-primary);
}
.arrow-button i {
	font-size: 2rem;
	color: var(--button-color-primary);
	transition: color 0.3s ease, transform 0.3s ease;
}
.rotated {
	transform: rotate(180deg);
}
</style>
