import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CategoryPhotosPage from "../pages/CategoryPhotosPage.vue";
import AddPhotoPage from "../pages/AddPhotoPage.vue";
const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePage,
	},
	{
		path: "/:category",
		name: "CategoryPhotosPage",
		component: CategoryPhotosPage,
	},
	{
		path: "/add-photo",
		name: "AddPhotoPage",
		component: AddPhotoPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
