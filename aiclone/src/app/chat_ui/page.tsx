"use client"

import React, { useState, useContext } from 'react'
import { ThemeContext } from './layout'

// Icons
const PaperAirplaneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const PaperClipIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
  </svg>
)

const MicrophoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
)

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 1.5L5 6l-1.5-1.5L5 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM12 12l1.5 1.5L12 15l-1.5-1.5L12 12zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z" />
  </svg>
)

// Chat Page Component
export default function ChatPage() {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const { isDark } = useContext(ThemeContext)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true)
      console.log('Sending message:', message)
      
      setTimeout(() => {
        setMessage('')
        setIsTyping(false)
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto'
        }
      }, 500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`
  }

  const getCurrentDateTime = () => {
    return '2025-06-16 20:15:36'
  }

  const themeClasses = {
    background: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-black',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textTertiary: isDark ? 'text-gray-400' : 'text-gray-500',
    textQuaternary: isDark ? 'text-gray-500' : 'text-gray-400',
    gradient: isDark ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-white via-gray-100 to-white',
    cardBg: isDark ? 'bg-gray-900/50' : 'bg-gray-100/50',
    cardBorder: isDark ? 'border-gray-800/50' : 'border-gray-300/50',
    cardHover: isDark ? 'hover:bg-gray-800/70' : 'hover:bg-gray-200/70',
    inputBg: isDark ? 'bg-gray-900/80' : 'bg-gray-100/80',
    inputBorder: isDark ? 'border-gray-700/50' : 'border-gray-300/50',
    inputFocus: isDark ? 'focus-within:border-gray-600/50 focus-within:ring-gray-500/20' : 'focus-within:border-gray-400/50 focus-within:ring-gray-400/20',
    buttonBg: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400',
    buttonText: isDark ? 'text-white' : 'text-black',
    borderColor: isDark ? 'border-gray-800/50' : 'border-gray-300/50',
    dots: isDark ? 'bg-white' : 'bg-black'
  }

  return (
    <div className={`flex flex-col h-full ${themeClasses.background} relative overflow-hidden`}>
      {/* Background */}
      <div className={`absolute inset-0 ${themeClasses.gradient}`}>
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute w-2 h-2 ${themeClasses.dots} rounded-full opacity-10`} style={{top: '20%', left: '10%'}}></div>
          <div className={`absolute w-1 h-1 ${themeClasses.dots} rounded-full opacity-20`} style={{top: '60%', left: '80%'}}></div>
          <div className={`absolute w-3 h-3 ${themeClasses.dots} rounded-full opacity-5`} style={{top: '40%', left: '70%'}}></div>
          <div className={`absolute w-2 h-2 ${themeClasses.dots} rounded-full opacity-15`} style={{top: '80%', left: '20%'}}></div>
          <div className={`absolute w-1 h-1 ${themeClasses.dots} rounded-full opacity-10`} style={{top: '30%', left: '50%'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SparklesIcon className={`w-8 h-8 ${themeClasses.text}`} />
              <SparklesIcon className={`w-6 h-6 ${themeClasses.textSecondary}`} />
              <SparklesIcon className={`w-4 h-4 ${themeClasses.textTertiary}`} />
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold ${isDark ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400' : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500'} bg-clip-text text-transparent leading-tight`}>
              Chat with top AI models
            </h1>
            <p className={`text-2xl md:text-3xl font-light ${themeClasses.textSecondary}`}>
              in a single window in the{' '}
              <span className={`${isDark ? 'bg-gradient-to-r from-gray-100 to-white' : 'bg-gradient-to-r from-gray-800 to-black'} bg-clip-text text-transparent font-semibold`}>
                fastest way
              </span>
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className={`p-4 rounded-xl ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300`}>
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-800/20' : 'bg-gray-200/50'} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <SparklesIcon className={`w-6 h-6 ${themeClasses.textSecondary}`} />
              </div>
              <h3 className={`${themeClasses.text} font-semibold mb-2`}>Multiple AI Models</h3>
              <p className={`${themeClasses.textTertiary} text-sm`}>Access GPT, Claude, and other top AI models</p>
            </div>
            
            <div className={`p-4 rounded-xl ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300`}>
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-800/20' : 'bg-gray-200/50'} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <PaperAirplaneIcon className={`w-6 h-6 ${themeClasses.textSecondary}`} />
              </div>
              <h3 className={`${themeClasses.text} font-semibold mb-2`}>Lightning Fast</h3>
              <p className={`${themeClasses.textTertiary} text-sm`}>Get responses in milliseconds</p>
            </div>
            
            <div className={`p-4 rounded-xl ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300`}>
              <div className={`w-12 h-12 ${isDark ? 'bg-gray-800/20' : 'bg-gray-200/50'} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <MicrophoneIcon className={`w-6 h-6 ${themeClasses.textSecondary}`} />
              </div>
              <h3 className={`${themeClasses.text} font-semibold mb-2`}>Voice & Text</h3>
              <p className={`${themeClasses.textTertiary} text-sm`}>Communicate however you prefer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className={`p-6 border-t ${themeClasses.borderColor} ${isDark ? 'bg-gray-900/30' : 'bg-gray-100/30'} backdrop-blur-sm relative z-10`}>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className={`relative flex items-end ${themeClasses.inputBg} rounded-2xl border ${themeClasses.inputBorder} ${themeClasses.inputFocus} focus-within:ring-2 transition-all duration-200 shadow-lg backdrop-blur-sm`}>
            <div className="flex-1 flex items-end min-h-[3rem]">
              <button 
                className={`p-3 ${themeClasses.textTertiary} hover:${themeClasses.textSecondary} ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-200/50'} rounded-xl transition-all duration-200`}
                aria-label="Attach file"
              >
                <PaperClipIcon className="w-5 h-5" />
              </button>
              
              <textarea
                ref={textareaRef}
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Meet Ask AI With undefined"
                className={`flex-1 bg-transparent ${themeClasses.text} ${isDark ? 'placeholder-gray-500' : 'placeholder-gray-400'} px-2 py-3 focus:outline-none resize-none max-h-[150px] min-h-[1.5rem]`}
                rows={1}
                disabled={isTyping}
              />
              
              <button 
                className={`p-3 ${themeClasses.textTertiary} hover:${themeClasses.textSecondary} ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-200/50'} rounded-xl transition-all duration-200`}
                aria-label="Voice input"
              >
                <MicrophoneIcon className="w-5 h-5" />
              </button>
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!message.trim() || isTyping}
              className={`p-3 m-1 ${themeClasses.buttonText} ${themeClasses.buttonBg} ${isDark ? 'disabled:bg-gray-800 disabled:text-gray-500' : 'disabled:bg-gray-200 disabled:text-gray-400'} disabled:cursor-not-allowed rounded-xl transition-all duration-200 shadow-md`}
              aria-label="Send message"
            >
              {isTyping ? (
                <div className={`w-5 h-5 border-2 ${isDark ? 'border-gray-400 border-t-transparent' : 'border-gray-600 border-t-transparent'} rounded-full animate-spin`} />
              ) : (
                <PaperAirplaneIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <div className={`flex items-center justify-center space-x-6 text-xs ${themeClasses.textQuaternary}`}>
            <span>Press Enter to send • Shift + Enter for new line</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{getCurrentDateTime()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}