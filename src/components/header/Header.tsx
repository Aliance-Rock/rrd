import { FC } from 'react' 
import { NavLink } from 'react-router-dom'

const links = [
	{ to: '/', name: 'Home' },
	{ to: '/about', name: 'About' },
	{ to: '/search', name: 'Search' },
	{ to: '/page404', name: 'PageNotFound' },
]

export const Header: FC = () => {
	return (
		<nav className='header'>
			{links.map(link => {
				return (
					<NavLink
						key={link.to}
						className={({ isActive }) => (isActive ? 'red' : '')}
						to={link.to}
					>
						{link.name}
					</NavLink>
				)
			})}
		</nav>
	)
}
