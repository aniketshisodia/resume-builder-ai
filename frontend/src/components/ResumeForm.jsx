export default function ResumeForm() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header with Resumify styling */}
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 md:p-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-emerald-100 text-4xl md:text-5xl font-['Poppins'] font-medium tracking-tight">
              RESUMIFY
            </h1>
            <p className="text-blue-50 font-['Manrope'] text-xl mt-2">
              Build your professional resume
            </p>
          </div>
  
          {/* Form Section */}
          <form className="p-6 md:p-8 space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Professional Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Software Engineer" 
                  className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Phone *</label>
                <input 
                  type="tel" 
                  placeholder="+1 (123) 456-7890" 
                  className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
  
            {/* Professional Summary */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Professional Summary *</label>
              <textarea 
                placeholder="Briefly describe your professional background and skills..." 
                className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
  
            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-200 border-b pb-2">Work Experience</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Job Title</label>
                    <input type="text" placeholder="Senior Developer" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Company</label>
                    <input type="text" placeholder="Tech Corp Inc." className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Start Date</label>
                    <input type="date" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">End Date</label>
                    <input type="date" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Responsibilities</label>
                  <textarea placeholder="Describe your responsibilities and achievements..." className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg h-24" />
                </div>
              </div>
              <button type="button" className="text-blue-400 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Another Position
              </button>
            </div>
  
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-200 border-b pb-2">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Institution</label>
                  <input type="text" placeholder="University of Technology" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Degree</label>
                  <input type="text" placeholder="Bachelor of Science" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Field of Study</label>
                  <input type="text" placeholder="Computer Science" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Graduation Year</label>
                  <input type="text" placeholder="2020" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
                </div>
              </div>
            </div>
  
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-200 border-b pb-2">Skills</h3>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Add Skills (comma separated)</label>
                <input type="text" placeholder="JavaScript, React, Project Management" className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg" />
              </div>
            </div>
  
            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Generate Professional Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  