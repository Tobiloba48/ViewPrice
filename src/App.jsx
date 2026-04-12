import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import SignUpPage from './Login/SignUpPage.jsx'
import SignInPage from './Login/SignInPage.jsx'
import PasswordReset from './Login/PasswordReset.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </Router>
  )
}

export default App
