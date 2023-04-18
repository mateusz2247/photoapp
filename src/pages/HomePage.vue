<template>
	<div class="home">
    <div class="flex justify-content ml-5 mt-2 mb-2">
      <PageTitle>Photos</PageTitle>
    </div>
		
		<PhotosCatalog></PhotosCatalog>
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
