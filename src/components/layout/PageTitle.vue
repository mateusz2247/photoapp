<template>
	<h1>
		<slot />
	</h1>
</template>

<script>
export default {
	name: "PageTitle",
};
</script>

<style scoped lang="scss">
h1 {
	font-size: 18px;
}
</style>
