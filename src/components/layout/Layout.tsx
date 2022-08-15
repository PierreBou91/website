import Link from 'next/link'
import styles from 'styles/Layout.module.css'
import { fetchNavigation } from 'server/handler'
import {
	useQuery, UseQueryResult,
} from '@tanstack/react-query'

type Props = {
	children: React.ReactNode
}

interface NavigationItem {
	title: string
	href: string
	target?: string
	rel?: string
}

const placeholder = [
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
		href: "https://github.com/PierreBou91",
		target: "_blank",
		rel: "norefferer",
	}
]

const Layout = (props: Props) => {

	const navigation = useQuery(['navigation'], fetchNavigation)

	const renderNavigation = (nav: UseQueryResult<NavigationItem[]>) => {
		switch (nav.status) {
			case 'loading': {
				return (
					placeholder.map((item) => {
						return (
							<Link href={item.href} key={item.title}>
								<a target={item.target} rel={item.rel}>{item.title}</a>
							</Link>
						)
					})
				)
			}
			case 'error': // Maybe find a better way to handle errors
				return <div>Error...</div>
			case 'success':
				return (
					nav.data.map((item: any) => {
						return (
							<Link key={item.title} href={item.href}>
								<a target={item.target} rel={item.rel}>{item.title}</a>
							</Link>
						)
					})
				)
		}
	}

	return (
		<main>
			<div className={`${styles.header} container`}>
				<h1>
					PierreBou
				</h1>
				<nav className={`${styles.topNav}`}>
					{
						renderNavigation(navigation)
					}
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