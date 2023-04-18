<template>
	<!-- <p>{{ title }}</p>
		<p>{{ author }}</p>
		<p>{{ category }}</p>
		<p>{{ votes }}</p>
		<p>{{ src }}</p> -->

	<div
		class="card relative flex flex-row align-items-center justify-content-center p-shadow-4">
		<Card class="shadow-4" style="width: 15rem">
			<template #header>
				<ImageItem :src="src"></ImageItem>
			</template>
			<template #title> {{ title }} </template>
			<template #subtitle>by {{ author }} </template>
			<template #content>
				<Tag severity="info" rounded>{{ category }}</Tag>
				<div class="absolute top-0 ">
					<p style="font-weight: bolder;">{{votes}}</p>
				<Button
					icon="pi pi-star"
					severity="help"
					text
					rounded
					size="large"
					aria-label="Favorite" />
				</div>
			</template>
	
		</Card>
	</div>
</template>
<script>
import Button from "primevue/button";
import Tag from "primevue/tag";
import Card from "primevue/card";
import ImageItem from "@/components/layout/ImageItem.vue";
export default {
	name: "PhotoSummary",
	components: { ImageItem, Card, Tag, Button },
	props: {
		src: {
			type: String,
		},
		title: {
			type: String,
		},
		author: {
			type: String,
		},
		category: {
			type: String,
		},
		votes: {
			type: Number,
		},
	},
};
</script>
<style lang="scss"

></style>