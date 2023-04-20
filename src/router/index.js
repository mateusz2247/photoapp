import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CategoryPhotosPage from "../pages/CategoryPhotosPage.vue";
import SinglePhotoPage from "../pages/SinglePhotoPage.vue";
/* import AddPhotoPage from "../pages/AddPhotoPage.vue"; */

const loadComponent = (page) => {
	return () => import(`../pages/AddPhotoPage.vue`);
};

const routes = [
	{
		path: "/add-photo",
		name: "AddPhotoPage",
		component: loadComponent("AddPhotoPage"),
	},
	{
		path: "/:category",
		name: "CategoryPhotosPage",
		component: CategoryPhotosPage,
		children: [
			{
				path: "/:photoId",
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
				path: "/:photoId",
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
