<template>
	<!-- <ul>
		<li :key="index" v-for="(category, index) in categories">
			{{ category.name }}
		</li>
	</ul> -->
    <div class="flex justify-content ml-5 mt-2 mb-2">
        <Button class="mr-2" :key="index" v-for="(category, index) in categories" size="small" @click="$router.push(':'+category.name)"  :label="category.name" outlined rounded />

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
