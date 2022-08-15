import Link from 'next/link'
import React from 'react'
import styles from 'styles/Layout.module.css'

type Props = {
	children: React.ReactNode
}

const navItems = [
	{
		title: "Home",
		href: "/",
		target: "",
		rel: "",
	},
	{
		title: "Articles",
		href: "/articles",
		target: "",
		rel: "",
	},
	{
		title: "About",
		href: "/about",
		target: "",
		rel: "",
	},
	{
		title: "Github",
		href: "https://github.com/PierreBou91/quantum-walk",
		target: "_blank",
		rel: "norefferer",
	},
]

const Layout = (props: Props) => {
	return (
		<main>
			<div className={`${styles.header} container`}>
				<h1>
					PierreBou
				</h1>
				<nav className={`${styles.topNav}`}>
					{
						navItems.map((item) => {
							return (
								<Link key={item.title} href={item.href}>
									<a target={item.target} rel={item.rel}>{item.title}</a>
								</Link>
							)
						})}
				</nav>
				<form action="submit">
					<input type="text" />
					<button type="submit" disabled>Search</button>
				</form>
			</div>
			{props.children}
		</main >
	)
}

export default Layout