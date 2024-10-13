<template>
	<button class="add-button">
		<i class="fa-solid fa-plus"></i>
	</button>
</template>
<style scoped>
.add-button {
	background-color: var(--button-color-primary);
	padding: 0.5rem 1.5rem;
}
.add-button:hover i {
	color: var(--text-color-primary);
}
.add-button i {
	font-size: 2rem;
	color: #ffffff;
	transition: color 0.3s ease;
}
</style>
