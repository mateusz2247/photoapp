<template>
	<!-- <ul>
		<li :key="index" v-for="(category, index) in categories">
			{{ category.name }}
		</li>
	</ul> -->
    <div>
        <Button :key="index" v-for="(category, index) in categories" size="small" :label="category.name" outlined rounded />

    </div>
</template>
<script>
import Button from "primevue/button";
import { mapGetters } from "vuex";
export default {
	name: "CategoriesList",
	computed: mapGetters({ categories: "allCategories" }),
    components:{Button}
};
</script>
