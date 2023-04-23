import Nav from './components/nav/Nav'
import Photo from './components/photo/Photo'
import MainContent from './components/mainContent/MainContent'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Nav />
        <Photo />
        <MainContent />
      </div>
    </BrowserRouter>
  )
}

export default App