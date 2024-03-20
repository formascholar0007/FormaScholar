import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginForm from './auth/LoginForm'
import Registrationform from './auth/Registrationform'
import Navbar from './component/Navbar'
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrationform" element={<Registrationform />} />
            <Route path="/loginform" element={<LoginForm />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
