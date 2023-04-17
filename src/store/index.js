import { createStore } from "vuex";
import axios from "axios";
import { apiUrl } from "@/config";

export default createStore({
	state: {},
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
	},
	actions: {
		async fetchCategories({ commit }) {
			const res = await axios.get(`${apiUrl}/categories`);
			commit("UPDATE_CATEGORIES", res.data);
		},
		async fetchPhotos({ commit }, page) {
			const res = await axios.get(`${apiUrl}/photos/${page}`);
			commit("UPDATE_PHOTOS", res.data);
		},

		async fetchCategoryPhotos({ commit }, { category, page }) {
			const res = await axios.get(`${apiUrl}/photos/${category}/${page}`);
			commit("UPDATE_PHOTOS", res.data);
		},
	},
	modules: {},
});
