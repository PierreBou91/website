import Link from "next/link";
import styles from "styles/Layout.module.css";
import { fetchNavigation } from "server/handler";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

type Props = {
	children: React.ReactNode;
};

interface NavigationItem {
	id: string;
	title: string;
	href: string;
	target?: string;
	rel?: string;
}

const placeholder = [
	{
		id: "5b9f6a43e97b6e0014enjf86a9vb",
		title: "Home",
		href: "/",
		target: "",
		rel: "",
	},
	{
		id: "5b9f6a43e97b6e0014ef86abv9vb",
		title: "Articles",
		href: "/articles",
		target: "",
		rel: "",
	},
	{
		id: "5b9f6a43e97b6e0014ef86a9dfvb",
		title: "About",
		href: "/about",
		target: "",
		rel: "",
	},
	{
		id: "5b9f6a43e97b6e0014ef86a9vdf",
		title: "Github",
		href: "https://github.com/PierreBou91",
		target: "_blank",
		rel: "norefferer",
	},
];

const Layout = (props: Props) => {
	const navigation = useQuery(["navigation"], fetchNavigation);

	return (
		<>
			<Head>
				<title>Dev Blog</title>
				<meta name="description" content="Dev blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className={`${styles.header} container`}>
					<h1>PierreBou</h1>
					<nav className={`${styles.topNav}`}>
						{navigation.status === "loading" ? (
							placeholder.map((item) => {
								return (
									<Link href={item.href} key={item.id}>
										<a target={item.target} rel={item.rel}>
											{item.title}
										</a>
									</Link>
								);
							})
						) : navigation.status === "error" ? ( // Maybe find a better way to handle errors
							<div>Error...</div>
						) : navigation.status === "success" ? (
							navigation.data.map((item: NavigationItem) => {
								return (
									<Link key={item.id} href={item.href}>
										<a target={item.target} rel={item.rel}>
											{item.title}
										</a>
									</Link>
								);
							})
						) : null}
					</nav>
					<form action="submit">
						<input type="text" />
						<button type="submit" disabled>
							Search
						</button>
					</form>
				</div>
				{props.children}
			</main>
		</>
	);
};

export default Layout;
