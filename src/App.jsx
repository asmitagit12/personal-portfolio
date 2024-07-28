
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CoverPage from './pages/CoverPage'
import MainPage from './pages/MainPage'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import ContactMe from './pages/ContactMe'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<ContactMe />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
