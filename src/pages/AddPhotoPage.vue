<template>
	<form class="grid" @submit.prevent="handleSubmit">
		<div class="col">
			<!-- title -->
			<div class="field">
				<label class="block">Title</label>
				<input-text type="text" v-model="form.title" />
			</div>

			<!-- author -->
			<div class="field">
				<label class="block">Author</label>
				<InputText type="text" v-model="form.author" />
			</div>

			<!-- category -->
			<div class="field">
				<label class="block">Category</label>
				<Listbox
					class="category"
					v-model="form.category"
					:options="categories" />
			</div>

			<!-- description -->
			<div class="field">
				<label class="block">Description</label>
				<Textarea rows="5" cols="30" v-model="form.description" />
			</div>

			<Button
				class="button-rounded button-success"
				type="submit"
				label="Add"
				icon="pi pi-plus" />
		</div>
		<div class="col">
			<ImageUpload></ImageUpload>
		</div>
	</form>
</template>

<script>
import axios from "axios";
import { apiUrl } from "@/config";
import Listbox from "primevue/listbox";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import ImageUpload from "@/components/shared/ImageUpload.vue";
export default {
	name: "AddPhotoPage",
	data: () => ({
		form: {
			title: "",
			author: "",
			description: "",
			category: "",
			file: null,
		},
	}),
	components: { Button, Listbox, Textarea, InputText, ImageUpload },
	methods: {
		async handleSubmit() {
			const formData = new FormData();
			formData.append("title", this.form.title);

            
			await axios.post(`${apiUrl}/photos`, formData, {
				"Content-Type": "multipart/form-data",
			});
		},
	},
};
</script>
<style>
.category {
	margin-left: 250px;
	margin-right: 250px;
}
</style>
