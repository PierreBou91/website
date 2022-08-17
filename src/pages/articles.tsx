import { useQuery, UseQueryResult } from "@tanstack/react-query";
import React from "react";
import { fetchArticles } from "server/handler";
import { Article } from "types/types";

type Props = {
	articles: UseQueryResult<Article[], unknown>;
};

const Articles = (props: Props) => {
	// const articles = useQuery(["articles"], fetchArticles);

	return (
		<div className="container">
			<h1>All the articles</h1>
			<input type="text" value="Some kind of filter" />
			{props.articles.data?.map((article) => (
				<div key={article.id}>
					<h2>{article.title}</h2>
					<h3>{article.authors}</h3>
					<p>{article.content}</p>
					<p>published: {article.publication_date}</p>
				</div>
			))}
		</div>
	);
};

export async function getServerSideProps() {
	const articles = useQuery(["articles"], fetchArticles);

	return {
		props: {
			articles,
		},
	};
}

export default Articles;
