<template>
	<PhotosList :photos="photos"></PhotosList>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PhotosList from "../shared/PhotosList.vue";
export default {
	name: "PhotosCatalog",
	props: {
		category: {
			type: String,
		},
	},
	computed: mapGetters({ photos: "allPhotos" }),
	methods: { ...mapActions(["fetchPhotos", "fetchCategoryPhotos"]) },
	created() {
		if (!this.category) this.fetchPhotos(1);
		else this.fetchCategoryPhotos({ category: this.category, page: 1 });
	},
	components: { PhotosList },
};
</script>
