import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RoutesComponent from './components/RoutesComponent'
import ErrorBoundary from './components/ErrorBoundary'

function App() {

  return (
    <Router>
      <ErrorBoundary>
        <RoutesComponent />
      </ErrorBoundary>
    </Router>
  )
}

export default App
