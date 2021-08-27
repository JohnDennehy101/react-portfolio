import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path='/' />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
