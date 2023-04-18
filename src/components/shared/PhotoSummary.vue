<template>
	<!-- <p>{{ title }}</p>
		<p>{{ author }}</p>
		<p>{{ category }}</p>
		<p>{{ votes }}</p>
		<p>{{ src }}</p> -->

	<div
		class="card  flex flex-row align-items-center justify-content-center p-shadow-4">
		<Card class="shadow-4 relative" style="width: 15rem">
			<template #header>
				<ImageItem :src="src"></ImageItem>
			</template>
			<template #title> {{ title }} </template>
			<template #subtitle>by {{ author }} </template>
			<template  #content >
				<Tag severity="info" rounded>{{ category }}</Tag>
				<div class="voting absolute top-0 right-0 ">
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
<style lang="scss">
.voting {
	height:70px;
	width:50px;
}
.p-card-content {
	padding-top: 0em;
	padding-bottom: 0px;
}
</style>