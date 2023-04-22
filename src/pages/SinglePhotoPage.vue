<template>

	<SinglePhoto :photoId="$route.params.photoId"></SinglePhoto>

</template>
<script>
import SinglePhoto from '@/components/shared/SinglePhoto.vue';
export default {
	name: "AddPhotoPage",
    components:{SinglePhoto}
};
</script>
