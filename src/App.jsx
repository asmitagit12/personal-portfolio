
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CoverPage from './pages/CoverPage'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<CoverPage/>}/>
     </Routes>
    </>
  )
}

export default App
