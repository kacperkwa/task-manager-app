<template>
	<button class="dotted-button">
		<i class="fa-solid fa-ellipsis-vertical"></i>
	</button>
</template>
<style scoped>
.dotted-button {
	background-color: transparent;
	padding: 1rem;
}
.dotted-button:hover i {
	color: var(--button-color-hover-primary);
}
.dotted-button i {
	font-size: 2rem;
	color: var(--button-color-primary);
	transition: color 0.3s ease;
}
</style>
