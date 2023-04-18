<template>
	<div class="grid">
		<PhotoSummary
			class="col-2"
			v-for="(photo, index) in photos"
			:key="index"
			:title="photo.title"
			:author="photo.author"
			:category="photo.category"
			:votes="photo.votes"
			:src="photo.src"
			:id="photo.id"
			@vote="vote"></PhotoSummary>
	</div>
</template>
<script>
import PhotoSummary from "./PhotoSummary.vue";

export default {
	name: "PhotosList",
	props: {
		photos: {
			type: Array,
		},
	},
	components: { PhotoSummary },
};
</script>
