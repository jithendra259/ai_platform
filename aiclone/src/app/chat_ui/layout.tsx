"use client"

import React, { useState, createContext, useContext } from 'react'

// Theme Context
const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {}
})

// Export the context for use in page.tsx
export { ThemeContext }

// Icons
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const ChatIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const LightBulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const LoginIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>
)

const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

// Main Layout Component
export default function ChatUILayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isDark, setIsDark] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const themeClasses = {
    background: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-black',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    sidebarBg: isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-100 via-white to-gray-200',
    sidebarBorder: isDark ? 'border-gray-700/50' : 'border-gray-300/50',
    headerBg: isDark ? 'bg-gray-900/50' : 'bg-gray-100/50',
    headerBorder: isDark ? 'border-gray-800/50' : 'border-gray-300/50',
    buttonBg: isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300',
    buttonText: isDark ? 'text-white' : 'text-black',
    navItemActive: isDark ? 'bg-gray-800/50 text-white border-gray-600/30 hover:bg-gray-700/40 hover:border-gray-500/40' : 'bg-gray-200/50 text-black border-gray-400/30 hover:bg-gray-300/40 hover:border-gray-400/40',
    navItemInactive: isDark ? 'text-white/80 hover:bg-gray-800/20 hover:text-white' : 'text-black/80 hover:bg-gray-200/20 hover:text-black'
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`flex h-screen ${themeClasses.background} ${themeClasses.text}  mx-auto max-w-[96rem]`}>
        {/* Sidebar */}
        <div 
          className={`${
            isSidebarOpen ? 'w-64' : 'w-0'
          } transition-all duration-300 ease-in-out overflow-hidden ${themeClasses.sidebarBg} border-r ${themeClasses.sidebarBorder} shadow-2xl`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-gray-700/30' : 'border-gray-300/30'} backdrop-blur-sm`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${isDark ? 'bg-gradient-to-br from-gray-600 to-gray-800' : 'bg-gradient-to-br from-gray-300 to-gray-500'} rounded-xl flex items-center justify-center shadow-lg ${isDark ? 'ring-2 ring-gray-600/20' : 'ring-2 ring-gray-400/20'}`}>
                  <span className={`${isDark ? 'text-white' : 'text-white'} font-bold text-lg select-none`}>SR</span>
                </div>
                <div>
                  <h1 className={`${themeClasses.text} font-bold text-xl tracking-tight`}>ScholarRank</h1>
                  <p className={`${themeClasses.textSecondary} text-xs`}>AI Platform</p>
                </div>
              </div>
              <button
                onClick={toggleSidebar}
                className={`p-2 ${isDark ? 'text-white/80 hover:text-white hover:bg-gray-700/20' : 'text-black/80 hover:text-black hover:bg-gray-200/20'} rounded-lg transition-all duration-200`}
                aria-label="Close sidebar"
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              <a
                href="/chat_ui"
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl ${themeClasses.navItemActive} border transition-all duration-200 shadow-sm`}
              >
                <ChatIcon className="w-5 h-5" />
                <span className="font-medium">Ask AI</span>
              </a>

              <a
                href="#"
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl ${themeClasses.navItemInactive} transition-all duration-200`}
              >
                <LightBulbIcon className="w-5 h-5" />
                <span className="font-medium">Questiongen AI</span>
              </a>

              <a
                href="#"
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl ${themeClasses.navItemInactive} transition-all duration-200`}
              >
                <UsersIcon className="w-5 h-5" />
                <span className="font-medium">Signup</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Sidebar Toggle Button (when closed) */}
        {!isSidebarOpen && (
          <div className="relative z-20">
            <button
              onClick={toggleSidebar}
              className={`absolute top-4 left-2 w-10 h-10 ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} ${themeClasses.text} rounded-xl flex items-center justify-center transition-all duration-300 border ${themeClasses.sidebarBorder} shadow-lg hover:shadow-xl`}
              aria-label="Open sidebar"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header */}
          <header className={`flex items-center justify-between p-4 border-b ${themeClasses.headerBorder} ${themeClasses.headerBg} backdrop-blur-sm`}>
            <div className="flex items-center space-x-2">
              {!isSidebarOpen && (
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${isDark ? 'bg-gradient-to-br from-gray-600 to-gray-800' : 'bg-gradient-to-br from-gray-300 to-gray-500'} rounded-lg flex items-center justify-center shadow-md`}>
                    <span className={`${isDark ? 'text-white' : 'text-white'} font-bold text-sm select-none`}>SR</span>
                  </div>
                  <div>
                    <span className={`${themeClasses.text} font-semibold text-lg`}>ScholarRank</span>
                    <span className={`${themeClasses.textSecondary} text-xs ml-2`}>AI Platform</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} ${themeClasses.text} rounded-lg transition-all duration-200 shadow-sm hover:shadow-md`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
              </button>
              
              {/* Login Button */}
              <button className={`flex items-center space-x-2 px-4 py-2 ${themeClasses.buttonBg} ${themeClasses.buttonText} rounded-lg transition-all duration-200 shadow-sm hover:shadow-md`}>
                <LoginIcon className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}