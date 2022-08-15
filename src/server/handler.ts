import mockNavigation from "./mockNavigation.json";
import mockArticles from "./mockArticles.json";

function fetchNavigation() {
	return mockNavigation;
}

function fetchArticles() {
	return mockArticles;
}

export { fetchNavigation, fetchArticles };
