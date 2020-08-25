import React from 'react'
import './App.css'
import './styles/main.scss'
import { connect } from 'react-redux'
import Main from './components/Main'

function App() {
  return (
    <div className='App'>
      <Main />
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(App)
