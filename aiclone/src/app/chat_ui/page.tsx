'use client'

import { useState, useRef, useEffect } from 'react'


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

export default function ChatPage() {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true)
      console.log('Sending message:', message)
      
      
      setTimeout(() => {
        setMessage('')
        setIsTyping(false)
        // Reset textarea height
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

  return (
    <div className="flex flex-col h-full bg-black relative overflow-hidden">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          {}
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-10" style={{top: '20%', left: '10%'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-20" style={{top: '60%', left: '80%'}}></div>
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-5" style={{top: '40%', left: '70%'}}></div>
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-15" style={{top: '80%', left: '20%'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-10" style={{top: '30%', left: '50%'}}></div>
        </div>
      </div>

      {}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SparklesIcon className="w-8 h-8 text-white" />
              <SparklesIcon className="w-6 h-6 text-gray-300" />
              <SparklesIcon className="w-4 h-4 text-gray-400" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Chat with top AI models
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-300">
              in a single window in the{' '}
              <span className="bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent font-semibold">
                fastest way
              </span>
            </p>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-800/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SparklesIcon className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Multiple AI Models</h3>
              <p className="text-gray-400 text-sm">Access GPT, Claude, and other top AI models</p>
            </div>
            
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-800/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <PaperAirplaneIcon className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Get responses in milliseconds</p>
            </div>
            
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-800/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MicrophoneIcon className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Voice & Text</h3>
              <p className="text-gray-400 text-sm">Communicate however you prefer</p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="p-6 border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Input Container */}
          <div className="relative flex items-end bg-gray-900/80 rounded-2xl border border-gray-700/50 focus-within:border-gray-600/50 focus-within:ring-2 focus-within:ring-gray-500/20 transition-all duration-200 shadow-lg backdrop-blur-sm">
            <div className="flex-1 flex items-end min-h-[3rem]">
              <button 
                className="p-3 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-xl transition-all duration-200"
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
                className="flex-1 bg-transparent text-white placeholder-gray-500 px-2 py-3 focus:outline-none resize-none max-h-[150px] min-h-[1.5rem]"
                rows={1}
                disabled={isTyping}
              />
              
              <button 
                className="p-3 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                aria-label="Voice input"
              >
                <MicrophoneIcon className="w-5 h-5" />
              </button>
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!message.trim() || isTyping}
              className="p-3 m-1 text-white bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed rounded-xl transition-all duration-200 shadow-md"
              aria-label="Send message"
            >
              {isTyping ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <PaperAirplaneIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {}
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
            <span>Press Enter to send • Shift + Enter for new line</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{getCurrentDateTime()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}