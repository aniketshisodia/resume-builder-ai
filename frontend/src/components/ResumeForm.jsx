// src/components/ResumeForm.jsx
export default function ResumeForm() {
    return (
      <div className="min-h-screen bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Resume Builder Form</h2>
        <form className="space-y-4 max-w-xl">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
          <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded" />
          <textarea placeholder="Summary" className="w-full border p-3 rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Generate Resume
          </button>
        </form>
      </div>
    )
  }
  