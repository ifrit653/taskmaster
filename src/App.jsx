import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/base/Layout'
import Home from './views/Home'
import About from './views/About' 
import Chart from './views/Chart'
import Error from './views/Error'

function App() {

  return (
    <Router>
      <Routes >
        <Route path ="/" element = {<Layout/>}>
          <Route index path="/" element ={<Home/>}/>
          <Route path= "/About" element= {<About/>}/> 
          <Route path='/chart' element = {<Chart/>} /> 
          <Route path='*' element = {<Error/>} /> 
        </Route>
      </Routes>
    </Router>
  )
}

export default App
