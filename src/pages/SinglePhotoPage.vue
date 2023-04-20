<template>
    
	<SinglePhoto :photoId="$route.params.photoId.substring(1)"></SinglePhoto>
</template>
<script>
import SinglePhoto from '@/components/shared/SinglePhoto.vue';
export default {
	name: "AddPhotoPage",
    components:{SinglePhoto}
};
</script>
