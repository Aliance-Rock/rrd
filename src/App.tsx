import { Link, Route, Routes} from 'react-router-dom'
import './App.css'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { PageNotFound } from './components/page404/PageNotFound'
import { Search } from './components/search/Search'

function App() {
	return (
<>
			<header className='App'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/search'>Search</Link>
				<Link to='*'>Page not found</Link>
			</header>
			<div className='app'>React-router</div>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/search' element={<Search/>}/>
				<Route path='*' element={<PageNotFound/>}/>
			</Routes>
		</>
	)
}

export default App
