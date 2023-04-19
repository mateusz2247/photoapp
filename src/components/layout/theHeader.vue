<template>
	<header class="header ml-5 mt-2 mb-2 flex justify-content-between ">
		<p><a href="/">Photos App </a>|Share your photo</p>
		<Button class="Button mr-5" size="small" label="Submit" icon="pi pi-plus" rounded @click="$router.push('/add-photo')" />
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

a{
    text-decoration: none;
	font-size: 1.5rem;
	font-weight: bolder;
}
</style>
