import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Work from '../work/Work'
import Portfolio from '../portfolio/Portfolio'
import './mainContent.scss'
import { BsCodeSlash } from 'react-icons/bs'

const MainContent = () => {
  return(
    <div className="main-content">
      <div className="icon-wrapper">
        <BsCodeSlash />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        {/* <Route path="*" element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default MainContent