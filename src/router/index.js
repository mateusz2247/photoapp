import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CategoryPhotosPage from "../pages/CategoryPhotosPage.vue";
import SinglePhotoPage from "../pages/SinglePhotoPage.vue";
/* import AddPhotoPage from "../pages/AddPhotoPage.vue"; */

const loadComponent = () => {
	return () => import(`../pages/AddPhotoPage.vue`);
};

const routes = [
	{
		path: "/add-photo",
		name: "AddPhotoPage",
		component: loadComponent("AddPhotoPage"),
	},
	{
		path: "/category/:category",
		name: "CategoryPhotosPage",
		component: CategoryPhotosPage,
		children: [
			{
				path: "photo/:photoId",
				name: "SinglePhotoPage",
				component: SinglePhotoPage,
			},
			{
				path: "phot",
				name: "SinglePhotoPage",
				component: SinglePhotoPage,
			},
		],
	},
	{
		path: "/",
		name: "HomePage",
		component: HomePage,
		children: [
			{
				path: "/photo/:photoId",
				name: "SinglePhotoPage",
				component: SinglePhotoPage,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
