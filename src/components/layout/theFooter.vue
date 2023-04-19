<template>
	<footer class="footer mr-8 mt-5 mb-2 flex justify-content-end"> <SmallTitle>We have {{amount}}  categories</SmallTitle></footer>
</template>
<script>
import { mapGetters } from "vuex";
import SmallTitle from "./SmallTitle.vue";

export default {
	name: "theFooter",
	computed: {...mapGetters({ amount: "categoriesAmount" }),
	
},components:{
	SmallTitle
}
	
    
};
</script>

