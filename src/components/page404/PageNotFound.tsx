import { FC } from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound: FC = () => {
	return (
		<div className='app'>
			<div>Страница не найдена</div>
			<button>
				<Link to='/'>Вернуться на домашнюю страницу</Link>
				</button>
		</div>
	)
}
