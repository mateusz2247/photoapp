<template>
	<div class="home">
		<div class="flex justify-content ml-5 mt-2 mb-2">
			<PageTitle>{{$route.params.category.substring(1)}}</PageTitle>
		</div>

		<PhotosCatalog :category="$route.params.category.substring(1)"></PhotosCatalog>
	</div>
</template>

<script>
import PageTitle from "@/components/layout/PageTitle.vue";
import PhotosCatalog from "@/components/features/PhotosCatalog.vue";
export default {
	name: "HomePage",

	components: {
		PageTitle,
		PhotosCatalog,
	},
};
</script>
