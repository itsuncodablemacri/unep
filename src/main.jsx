import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import A from './Contexts/A.jsx'
import B from './Contexts/B.jsx'
import C from './Contexts/C.jsx'
import Main from './Main/Main.jsx'

import "@fontsource/roboto"; 
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Main/>}/>
    <Route path='/A' element={<A/>}/>
    <Route path='/B' element={<B/>}/>
    <Route path='/C' element={<C/>}/>
    </Routes>
  </Router>
)
