// src/components/Home.jsx
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400 text-6xl md:text-8xl font-['Poppins'] font-medium tracking-tight leading-[0.85] mb-6">
          RESUMIFY
        </h1>
        <p className="text-gray-300 text-2xl md:text-3xl font-['Manrope'] font-light tracking-wider mt-6 max-w-2xl mx-auto">
          Elevate your career with AI-powered resume perfection
        </p>
        <div className="mt-12">
        <button
        className="cursor-pointer px-10 py-4 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-['Manrope'] font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg"
  onClick={() => navigate('/form')}
>
  Start Building →  
    </button>

        </div>
      </div>
    </div>
  )
}
