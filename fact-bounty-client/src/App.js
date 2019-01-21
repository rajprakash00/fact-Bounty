import React, {Component}               from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider                 from '@material-ui/core/styles/MuiThemeProvider'
import 'typeface-roboto'

import {theme} from './theme'
import './App.sass'

import Landing  from './components/landing/Landing'
import Register from './components/register/Register'
import Login    from './components/login/Login'

class App extends Component {
	render() {
		return (
			<Router>
				<MuiThemeProvider theme={theme}>
					<div className="App">
						<Route exact path="/" component={Landing}/>
						<Route exact path="/register" component={Register}/>
						<Route exact path="/login" component={Login}/>
					</div>
				</MuiThemeProvider>
			</Router>
		)
	}
}

export default App