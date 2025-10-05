import { useState } from 'react'
import { motion } from 'framer-motion'
import ChatMessage from '../components/ChatMessage'
import ThreeBackground from '../components/ThreeBackground'
import { mockConversations } from '../data/mockData'

function AskAI() {
  const [messages, setMessages] = useState(mockConversations)
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      isUser: true,
      text: input
    }

    const aiResponse = {
      id: messages.length + 2,
      isUser: false,
      text: "This is a demo response. In production, this would connect to an AI backend with Islamic knowledge.",
      references: [
        "Quran reference would appear here",
        "Hadith reference would appear here",
        "Scholar opinion would appear here"
      ]
    }

    setMessages([...messages, userMessage, aiResponse])
    setInput('')
  }

  return (
    <div className="min-h-screen relative py-10 px-6">
      <div className="fixed inset-0 opacity-20">
        <ThreeBackground />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="glass-card rounded-3xl p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Ask Islamic AI</h1>
            <p className="text-gray-600 dark:text-gray-400">Get answers with authentic references from Quran and Hadith</p>
          </div>

          <div className="min-h-[500px] max-h-[600px] overflow-y-auto mb-6 px-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} isUser={msg.isUser} />
            ))}
          </div>

          <form className="flex gap-3 mb-4" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your question about Islam..."
              className="flex-1 p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
            />
            <button type="submit" className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
              Send
            </button>
          </form>

          <button className="w-full py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
            Send to Scholar for Verification
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default AskAI