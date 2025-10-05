import { useState } from 'react'
import { motion } from 'framer-motion'

function ChatMessage({ message, isUser }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex mb-5 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[70%] p-4 rounded-2xl glass-card relative group ${isUser ? 'bg-gray-900/80 dark:bg-white/80 text-white dark:text-gray-900' : 'bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white'}`}>
        <p className="leading-relaxed">{message.text}</p>
        {message.references && (
          <div className="mt-4 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
            <h4 className="text-sm font-semibold mb-2 text-gold">References:</h4>
            <ul className="text-sm space-y-1 opacity-90">
              {message.references.map((ref, index) => (
                <li key={index}>{ref}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </motion.div>
  )
}

export default ChatMessage