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
					optionLabel="name"
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
			<ImageUpload @choose="handleImage"></ImageUpload>
			<Message severity="success" v-show="isSuccess"
				>Success! Your photo has been submitted</Message
			>
			<Message severity="error" v-show="isError"
				>Oops… something went wrong…</Message
			>
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
import { mapGetters } from "vuex";
import Message from "primevue/message";
export default {
	name: "AddPhotoPage",
	data: () => ({
		isSuccess: false,
		isError: false,
		form: {
			title: "",
			author: "",
			description: "",
			category: "",
			file: null,
		},
	}),
	components: { Button, Listbox, Textarea, InputText, ImageUpload, Message },
	computed: mapGetters({ categories: "Categories/allCategories" }),
	methods: {
		handleImage(img) {
			this.form.file = img;
		},
		async handleSubmit() {
			this.isSuccess = false;
			this.isError = false;
			try {
				const formData = new FormData();
				formData.append("title", this.form.title);
				formData.append("author", this.form.author);
				formData.append("description", this.form.description);
				formData.append("category", this.form.category.name);
				formData.append("file", this.form.file);

				//jak dodac file?
				await axios.post(`${apiUrl}/photos`, formData, {
					"Content-Type": "multipart/form-data",
				});
				this.isSuccess = true;
			} catch (err) {
				this.isError = true;
			}
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
