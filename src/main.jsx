import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Calculator from './Main/Calculator'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
