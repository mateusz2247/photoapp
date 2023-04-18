<template>
	<div ref="catalog" class="scrollContainer">
		<PhotosList class="grid" :photos="photos"></PhotosList>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PhotosList from "../shared/PhotosList.vue";
export default {
	name: "PhotosCatalog",
	data() {
		return {
			currentPage: 1,
		};
	},
	props: {
		category: {
			type: String,
		},
	},
	computed: mapGetters({ photos: "allPhotos" }),
	methods: {
		...mapActions(["fetchPhotos", "fetchCategoryPhotos"]),
		loadPhotos() {
			this.currentPage++;
			if (!this.category) this.fetchPhotos(this.currentPage);
			else
				this.fetchCategoryPhotos({
					category: this.category,
					page: this.currentPage,
				});
		},
		handleScroll() {
			
			const elem = this.$refs.catalog;
			const bottomOfWindow =
				Math.ceil(elem.scrollTop) >= elem.scrollHeight - elem.offsetHeight;
			if (bottomOfWindow) this.loadPhotos();
		},
		prepareScroll() {
			this.$refs.catalog.addEventListener("scroll", () => {
				this.handleScroll();
			});
		},
	},

	created() {
		if (!this.category) this.fetchPhotos(1);
		else this.fetchCategoryPhotos({ category: this.category, page: 1 });
	},
	mounted(){
		this.prepareScroll();
		
	},
	components: { PhotosList },
};
</script>
<style scoped lang="scss">
.scrollContainer {
	max-height: 1200px;
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
