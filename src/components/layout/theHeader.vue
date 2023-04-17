<template>
	<header class="header p-mt-2 p-mb-2">
		<span><a href="/a">Photos App </a>|</span>Share your photo
		<Button size="small" label="Submit" icon="pi pi-plus" rounded />
	</header><CategoriesList></CategoriesList>
</template>
<script>
import Button from "primevue/button";
import CategoriesList from "../features/CategoriesList.vue";
export default {
	name: "theHeader",
	components: { Button, CategoriesList },
};
</script>
<style lang="scss">
span {
	font-size: 1.5rem;
	font-weight: bolder;
}
a{
    text-decoration: none;
}
</style>
