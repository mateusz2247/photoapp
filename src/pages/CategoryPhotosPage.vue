<template>
	<div class="home">
		<div class="flex justify-content ml-5 mt-2 mb-2">
			<PageTitle>{{ $route.params.category }}</PageTitle>
		</div>
	{{ $route.params }}
		<PhotosCatalog
			:category="$route.params.category"></PhotosCatalog>
			<router-view v-slot="{ Component }">
					<SlideFadeAnimation>
						<component :is="Component" :key="$route.fullPath" />
					</SlideFadeAnimation>
				</router-view>
				
		
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
