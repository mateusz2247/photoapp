<template>
	<div class="colored" v-show="isHovered"></div>
	<img
		@mouseover="mouseOver"
		@mouseleave="mouseOver"
		:src="imageSrc"
		class="image" />
</template>

<script>
import { imagesUrl } from "@/config";

export default {
	name: "ImageItem",
	data() {
		return {
			isHovered: false,
		};
	},
	props: {
		src: {
			type: String,
			required: true,
		},
	},
	methods: {
        mouseOver: function(){
            this.isHovered = !this.isHovered;   
        }},
	computed: {
		imageSrc() {
			return `${imagesUrl}/${this.src}`;
		},
	},
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
