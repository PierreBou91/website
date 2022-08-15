import type { NextPage } from "next";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className="container">
			<img
				src="https://dummyimage.com/1200x400/000/ffffff&text=title+image+with+inspiring+shit"
				alt="My awsome title image"
			/>
			<h1>This is a blog site</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				tenetur corrupti commodi mollitia labore? Debitis sapiente
				architecto repellendus quam optio consectetur molestias cum
				aliquid ipsa inventore? Delectus sint numquam nulla!
			</p>
			<h2>Featured Articles</h2>
			<ul>
				<li>Article 1</li>
				<li>Article 2</li>
				<li>Article 3</li>
			</ul>
		</div>
	);
};

export default Home;
