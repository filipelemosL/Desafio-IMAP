import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Components/Menu'
import Services from './Components/Services'
import Carousel from './Components/Carousel'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Carousel />
    <Services />
  </React.StrictMode>,
)
