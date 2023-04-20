
import axios from 'axios'
import { apiUrl } from '@/config'

export default {
	namespaced: true,
	state: {
		photos: [],
		photosRequest: {
			pending: false,
			error: false,
			success: false,
		},
		allPhotosLoaded: false,
		
	},
	getters: {
		allPhotos(state) {
			return state.photos;
		},
	},
	mutations: {
		ADD_VOTE(state, id) {
			const index = state.photos.findIndex((obj) => obj._id == id);

			state.photos[index].votes++;
		},
		ADD_PHOTOS(state, data) {
			state.photos = [...state.photos, ...data];
		},
		START_REQUEST(state) {
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
		TOGGLE_ALL_PHOTOS_LOADED(state) {
			state.allPhotosLoaded = !state.allPhotosLoaded;
		},
		UPDATE_PHOTOS(state, data) {
			state.photos = data;
		},
	},
	actions: {
		async addVote({ commit }, id) {
			await axios.put(`${apiUrl}/photos/vote/${id}`);
			commit("ADD_VOTE", id);
		},
		async fetchPhotosFromAPI({ commit, state }, { url, page }) {
			try {
				// if it's first set of photos and allPhotosLoaded is true => make it default false
				if (state.allPhotosLoaded && page === 1)
					commit("TOGGLE_ALL_PHOTOS_LOADED");

				// it's not the first page and allPhotosLoaded is true? => stop function
				if (state.allPhotosLoaded) return false;

				commit("START_REQUEST");
				const res = await axios.get(url);
				
				commit("END_PHOTOS_REQUEST");

				// if the set is not full, toggle allPhotosLoaded
				if (res.data.length < 12) commit("TOGGLE_ALL_PHOTOS_LOADED");

				if (page > 1) commit("ADD_PHOTOS", res.data);
				else commit("UPDATE_PHOTOS", res.data);
			} catch (err) {
				commit("ERROR_PHOTOS_REQUEST");
			}
		},

		async fetchPhotos({ dispatch }, page) {
			dispatch("fetchPhotosFromAPI", { url: `${apiUrl}/photos/${page}`, page });
		},

		async fetchCategoryPhotos({ dispatch }, { category, page }) {
			dispatch("fetchPhotosFromAPI", {
				url: `${apiUrl}/photos/${category}/${page}`,
				page,
			});
		},
	},
};
