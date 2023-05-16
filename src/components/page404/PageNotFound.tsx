import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const PageNotFound: FC = () => {
	const navigate = useNavigate()

	return (
		<div>
			<div>Страница не найдена</div>
			<button
				onClick={() => {
					navigate('/')
				}}
			>
				{' '}
				Вернуться
			</button>
		</div>
	)
}
