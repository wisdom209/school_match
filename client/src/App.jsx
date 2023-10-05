import React, { useState } from 'react'
import LandingDashBoard from './pages/LandingDashBoard'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Favorite from './pages/Favorite'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppContext from './context/AppContext'
import Register from './pages/Register'
import Login from './pages/Login'
import Update from './pages/UpdateProfile'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import SearchResult from './pages/SearchResults'


function App() {
	const [data, setData] = useState({})
	return (
		<AppContext.Provider value={{ data, setData }}>
			<Router>
				<Routes>
					<Route index element={<Landing />} ></Route>
					<Route path='/dashboard' element={<LandingDashBoard />}> </Route>
					<Route path='/register' element={<Register />}> </Route>
					<Route path='/login' element={<Login />}> </Route>
					<Route path='/update' element={<Update />}> </Route>
					<Route path="/favorites" element={<Favorite />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
					<Route path='/search' element={<Search />}></Route>
					<Route path='/search_result' element={<SearchResult />}></Route>
					<Route path='/*' element={<NotFound />}></Route>
				</Routes>
			</Router>
		</AppContext.Provider>
	)
}

export default App
