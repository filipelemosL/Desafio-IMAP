import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Components/Menu'
import Services from './Components/Services'
import Carousel from './Components/Carousel'
import Charts from './Components/Charts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Carousel />
    <Services />
    <Charts />
  </React.StrictMode>,
)
