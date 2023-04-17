<template>
	<p v-for="(photo, index) in photos" :key="index">{{ photo.src }}</p>
</template>
<script>
export default {
	name: "PhotosList",
	props: {
		photos: {
			type: Array,
		},
	},
};
</script>
