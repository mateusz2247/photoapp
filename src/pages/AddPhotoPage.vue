<template>
	<Form v-slot="{ errors }" class="grid" @submit="handleSubmit">
		<div class="col">
			<!-- title -->

			<Field
				class="p-field"
				name="title"
				v-slot="{ field }"
				rules="required|min:10|max:60">
				<label class="block">Title</label>
				<input-text v-bind="field" type="text" v-model="form.title" />
				<div class="error">
					<span>{{ errors.title }}</span>
				</div>
			</Field>

			<!-- author -->
			<Field
				class="p-field"
				name="author"
				v-slot="{ field }"
				rules="required|min:3|max:30">
				<label class="block">Author</label>
				<input-text v-bind="field" type="text" v-model="form.author" />
				<div class="error">
					<span>{{ errors.author }}</span>
				</div>
			</Field>

			<!-- <div class="field">
				<label class="block">Author</label>
				<InputText type="text" v-model="form.author" />
			</div> -->

			<!-- category -->
			<Field
				class="p-field"
				name="category"
				v-slot="{ field }"
				rules="required">
				<label class="block">Category</label>
				<Listbox
					v-bind="field"
					optionLabel="name"
					class="category"
					v-model="form.category"
					:options="categories" />
				<div class="error">
					<span>{{ errors.category }}</span>
				</div>
			</Field>
			<!-- description -->
			<Field
				class="p-field"
				name="description"
				v-slot="{ field }"
				rules="required|min:0|max:100">
				<label class="block">Description</label>
				<Textarea
					v-bind="field"
					rows="5"
					cols="30"
					v-model="form.description" />
			</Field>

			<Button
				class="button-rounded button-success ml-2"
				type="submit"
				label="Add"
				icon="pi pi-plus" />
		</div>
		<div class="col">
			<Field
				class="p-col"
				v-slot="{ field }"
				rules="required|ext:png,jpg"
				name="image">
				<span class="error-text">{{ errors.image }}</span>
				<ImageUpload v-bind="field" @choose="handleImage"></ImageUpload>
			</Field>
			<Message severity="success" v-show="isSuccess"
				>Success! Your photo has been submitted</Message
			>
			<Message severity="error" v-show="isError"
				>Oops… something went wrong…</Message
			>
		</div>
	</Form>
</template>

<script>
import axios from "axios";
import { apiUrl } from "@/config";
import Listbox from "primevue/listbox";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import ImageUpload from "@/components/shared/ImageUpload.vue";
/* import { mapGetters } from "vuex"; */
import Message from "primevue/message";
import { Form, Field, defineRule } from "vee-validate";
import { ref, reactive, computed } from "vue";
import { required, min, max, ext } from "@vee-validate/rules";

defineRule(
	"required",
	(value) => required(value) || "This field is so so required..."
);
defineRule(
	"min",
	(value, params) => min(value, params) || `It should be longer than ${params}`
);
defineRule(
	"max",
	(value, params) => max(value, params) || `It should be shorter than ${params}`
);
defineRule(
	"ext",
	(value, params) =>
		ext(value, params) || `You should use one of these extensions: ${params}`
);
export default {
	name: "AddPhotoPage",
	props: {},
	setup(props, { root: { $store } }) {
		console.log(props);
		const isSuccess = ref(false);
		const isError = ref(false);
		const form = reactive({
			title: "",
			author: "",
			description: "",
			category: "",
			file: null,
		});
		const categories = computed(() => $store.state.Categories.allCategories);
		function handleImage(img) {
			form.file = img;
		}
		async function handleSubmit() {
			isSuccess.value = false;
			isError.value = false;
			try {
				const formData = new FormData();
				formData.append("title", form.title);
				formData.append("author", form.author);
				formData.append("description", form.description);
				formData.append("category", form.category.name);
				formData.append("file", form.file);

				//jak dodac file?
				await axios.post(`${apiUrl}/photos`, formData, {
					"Content-Type": "multipart/form-data",
				});
				isSuccess.value = true;
			} catch (err) {
				isError.value = true;
			}
		}

		return { isSuccess, isError, form, handleImage, handleSubmit, categories };
	},
	/* data: () => ({
		isSuccess: false,
		isError: false,
		form: {
			title: "",
			author: "",
			description: "",
			category: "",
			file: null,
		},
	}), */
	components: {
		Button,
		Listbox,
		Textarea,
		InputText,
		ImageUpload,
		Message,
		Form,
		Field,
	},
	/* computed: mapGetters({ categories: "Categories/allCategories" }), */
	/* methods: {
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
	}, */
};
</script>
<style>
.category {
	margin-left: 250px;
	margin-right: 250px;
}
.error {
	color: red;
}
</style>
