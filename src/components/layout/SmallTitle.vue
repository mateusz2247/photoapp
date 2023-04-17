<template>
	<h1>
		<slot />
	</h1>
</template>

<script>
export default {
	name: "SmallTitle",
};
</script>

<style scoped lang="scss">
h1 {
	font-size: 16px;
}
</style>
