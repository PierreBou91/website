import mockNavigation from "./mockNavigation.json";
import mockArticles from "./mockArticles.json";
import { Article } from "types/types";

function fetchNavigation() {
	return mockNavigation;
}

function fetchArticles(): Article[] {
	return mockArticles;
}

export { fetchNavigation, fetchArticles };
