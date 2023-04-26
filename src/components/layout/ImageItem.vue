<template>
	<div
		@click="$emit('vote')"
		@mouseleave="mouseOver"
		class="colored"
		v-show="isHovered"></div>
	<img @mouseenter="mouseOver" :src="imageSrc" class="image" />
</template>

<script>
import { imagesUrl } from "@/config";
import { ref, computed } from "vue";
export default {
	name: "ImageItem",
	setup(props) {
		const isHovered = ref(false);

		function mouseOver() {
			isHovered.value = !isHovered.value;
		}

		const imageSrc = computed(() => `${imagesUrl}/${props.src}`);

		return { isHovered, mouseOver, imageSrc };
	},
	/* data() {
		return {
			isHovered: false,
		};
	}, */
	props: {
		src: {
			type: String,
			required: true,
		},
	},
	/* methods: {
		mouseOver: function () {
			this.isHovered = !this.isHovered;
		},
	}, */
	/* computed: {
		imageSrc() {
			return `${imagesUrl}/${this.src}`;
		},
	}, */
};
</script>

<style lang="scss">
.image {
	height: 350px;
	width: 220px;
	object-fit: cover;
	position: relative;
}
.colored {
	height: 350px;
	width: 100%;
	background-color: rgba(155, 89, 182, 0.5);
	position: absolute;
	z-index: 100;
}
</style>
