import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Home: FC = () => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<h3>Домашняя страница</h3>
		</div>
	)
}
