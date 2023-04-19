import Nav from './components/nav/Nav'
import Photo from './components/photo/Photo'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Nav />
        <Photo />
        <div className="main-content">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
          {/* <About /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App