
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CoverPage from './pages/CoverPage'
import MainPage from './pages/MainPage'
import Layout from './components/Layout'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        </Route>
     </Routes>
    </>
  )
}

export default App
