<template>
	<button class="arrow-button">
		<i class="fa-solid fa-angle-down"></i>
	</button>
</template>

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
	transition: color 0.3s ease;
}
</style>
