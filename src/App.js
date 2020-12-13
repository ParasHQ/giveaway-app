import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import GiveawayDetail from './components/GiveawayDetail'
import Home from './components/Home'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/:giveawayId">
					<GiveawayDetail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
