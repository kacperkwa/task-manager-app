<template>
	<button class="add-button">
		<i class="fa-solid fa-plus"></i>
	</button>
</template>
<style scoped>
.add-button {
	background-color: var(--button-color-primary);
	padding: 0.5rem 1.5rem;
	transition: background-color 0.3s ease;
}
.add-button:hover {
	background-color: var(--button-color-hover-primary);
}
.add-button i {
	font-size: 2rem;
	color: #ffffff;
}
</style>
