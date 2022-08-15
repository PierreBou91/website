import React from "react";

type Props = {};

const Articles = (props: Props) => {
	return (
		<>
			<h1>All the articles</h1>
			<input type="text" value="Some kind of filter" />
			<ul>
				<li>Article 1</li>
				<li>Article 2</li>
				<li>Article 3</li>
			</ul>
		</>
	);
};

export default Articles;
