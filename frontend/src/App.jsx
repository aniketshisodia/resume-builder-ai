import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ResumeForm from './components/ResumeForm'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<ResumeForm />} />
    </Routes>
  )
}