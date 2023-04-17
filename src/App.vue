<template>
	<div id="app">
		<div class="container p-p-4">
			<the-header></the-header>
			<main>
				<router-view />
			</main>
			<the-footer></the-footer>
		</div>
	</div>
</template>
<script>
import { mapActions } from "vuex";
import theHeader from "./components/layout/theHeader.vue";
import theFooter from "./components/layout/theFooter.vue";
export default {
	name: "App",
	components: { theHeader, theFooter },
	methods: { ...mapActions(["fetchCategories"]) },
	mounted() {
		this.fetchCategories();
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
