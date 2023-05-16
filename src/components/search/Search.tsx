import { FC } from 'react'

export const Search: FC = () => {
	return (
		<div className='app'>
			<input type='text' placeholder='Введите значение' />
			<button>Поиск</button>
		</div>
	)
}
