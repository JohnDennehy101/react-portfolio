import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homePage'
import PortfolioPage from './pages/portfolioPage'
import Header from './components/header'
import Footer from './components/footer'
import '../src/scss/index.scss'

const App = () => {
  return (
    <div id='container'>
      <Router>
        <Header />
        <div id='main-content'>
          <Switch>
            <Route component={HomePage} exact path='/' />
            <Route component={PortfolioPage} exact path='/portfolio' />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
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
