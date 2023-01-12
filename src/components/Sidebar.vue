<template>
	<aside>
		Sidebar
	</aside>
</template>


<script setup>
</script>

<style Lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	width: var(--sidebar-width);;
	min-height: 100vh;
	overflow: hidden;
	padding: 1rem;

	background-color: var(--dark);
	color: var(--light);

}

</style>