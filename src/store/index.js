import { createStore } from "vuex";
import axios from "axios";
import { apiUrl } from "@/config";

export default createStore({
	state: {
		photosRequest: {
			pending: false,
			error: false,
			success: false,
		},
	},
	getters: {
		categoriesAmount(state) {
			return state.categories.length;
		},
		allCategories(state) {
			return state.categories;
		},
		allPhotos(state) {
			return state.photos;
		},
	},
	mutations: {
		UPDATE_CATEGORIES(state, data) {
			state.categories = data;
		},
		UPDATE_PHOTOS(state, data) {
			state.photos = data;
		},
		ADD_PHOTOS(state, data) {
			state.photos = [...state.photos, ...data];
		},
		START_PHOTOS_REQUEST(state) {
			state.photosRequest = {
				pending: true,
				error: false,
				success: false,
			};
		},
		END_PHOTOS_REQUEST(state) {
			state.photosRequest = {
				pending: false,
				error: false,
				success: true,
			};
		},
		ERROR_PHOTOS_REQUEST(state) {
			state.photosRequest = {
				pending: false,
				error: true,
				success: false,
			};
		},
	},
	actions: {
		async fetchCategories({ commit }) {
			const res = await axios.get(`${apiUrl}/categories`);
			commit("UPDATE_CATEGORIES", res.data);
		},
		async fetchPhotos({ commit }, page) {
			const res = await axios.get(`${apiUrl}/photos/${page}`);
			if (page > 1) {
				commit("ADD_PHOTOS", res.data);
			} else {
				commit("UPDATE_PHOTOS", res.data);
			}
		},

		async fetchCategoryPhotos({ commit }, { category, page }) {
			const res = await axios.get(`${apiUrl}/photos/${category}/${page}`);
			if (page > 1) {
				commit("ADD_PHOTOS", res.data);
			} else {
				commit("UPDATE_PHOTOS", res.data);
			}
		},
	},
	modules: {},
});
