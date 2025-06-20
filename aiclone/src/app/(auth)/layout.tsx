import '../globals.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex min-h-screen">
        {/* Left Side - Branding (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="w-full px-12 xl:px-20 py-8">
            <div className="max-w-lg">
              <div className="mb-10">
                <h1 className="text-5xl font-bold mb-6 text-white">
                  Scholar<span className="text-white">Rank</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Unlock the power of academic research and scholarly insights. 
                  Join thousands of researchers advancing knowledge together.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-700 bg-opacity-60 rounded-lg flex items-center justify-center border border-gray-600">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Research Analytics</h3>
                    <p className="text-gray-400 text-base mt-1">Advanced metrics and insights for your academic work</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-700 bg-opacity-60 rounded-lg flex items-center justify-center border border-gray-600">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Collaborative Platform</h3>
                    <p className="text-gray-400 text-base mt-1">Connect and collaborate with researchers worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-700 bg-opacity-60 rounded-lg flex items-center justify-center border border-gray-600">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">AI-Powered Tools</h3>
                    <p className="text-gray-400 text-base mt-1">Leverage cutting-edge AI for research assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center min-h-screen bg-gray-800">
          <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}