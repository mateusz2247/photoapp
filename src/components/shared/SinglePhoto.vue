<template>
	<Dialog
		:closable="false"
		:visible="true"
		:style="{ width: '50vw' }"
		:modal="true">
		<div v-if="!imageSrc"><p>wczytuje dane</p></div>
		<div v-if="imageSrc" >
			<Img :src="imageSrc"></Img>

			<h1>{{ photo.title }}</h1>
			<h3>{{ "by " + photo.author }}</h3>
			<h3>{{ "votes: " + photo.votes }}</h3>
			<Tag severity="info" rounded>{{ photo.category }} </Tag>
		</div>
		<template v-slot:footer>
			<Button
				class="p-button-rounded"
				label="Close"
				icon="pi pi-times"
				@click="$router.go(-1)"
				autofocus />
		</template>
	</Dialog>
</template>

<script>
import { imagesUrl } from "@/config";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { mapActions, mapGetters } from "vuex";
import Tag from "primevue/tag";

// fix version inconsistence
Dialog.methods.removeStylesFromMask = () => {};

export default {
	name: "SinglePhoto",
	props: {
		src: {
			type: String,
			required: true,
		},
	},
	computed: {
		...mapGetters({ photo: "Photos/loadedPhoto" }),
		photoId() {
			return this.$route.params.photoId;
		},
		imageSrc() {
			return this.photo ? `${imagesUrl}/${this.photo.src}` : null;
		},
	},
	methods: { ...mapActions("Photos", ["loadPhoto"]) },
	created() {
		this.loadPhoto(this.photoId);
	},
	components: { Dialog, Button, Tag },
};
</script>

<style lang="scss" scoped>
.p-dialog-mask {
	pointer-events: auto;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.4);
}
.p-tag {
	font-size: 1.2rem;
}
img{
	max-height: 1200px;
	max-width: 900px;
	
}
</style>
