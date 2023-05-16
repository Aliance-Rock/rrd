import { FC } from 'react'
import { Link } from 'react-router-dom'

export const About: FC = () => {
	return (
		<div>
			<Link to='/about'>About us</Link>
				<h3>Мы раскажем вам о нас!</h3>
		</div>
	)
}
