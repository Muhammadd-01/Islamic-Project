import { useState } from 'react'
import { motion } from 'framer-motion'

function ScholarDashboard() {
  const [drafts] = useState([
    {
      id: 1,
      question: "What is the ruling on cryptocurrency?",
      aiAnswer: "Based on scholarly opinions, cryptocurrency is permissible...",
      status: "pending"
    },
    {
      id: 2,
      question: "Can I pray Taraweeh at home?",
      aiAnswer: "Yes, Taraweeh can be prayed at home...",
      status: "pending"
    }
  ])

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Scholar Dashboard</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Review and approve AI-generated responses</p>

          <div className="space-y-6">
            {drafts.map((draft) => (
              <div key={draft.id} className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Question: {draft.question}</h3>
                <div className="glass p-6 rounded-xl mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gold">AI Response:</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{draft.aiAnswer}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="flex-1 py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                    Approve & Publish
                  </button>
                  <button className="flex-1 py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                    Edit Response
                  </button>
                  <button className="flex-1 py-3 px-6 bg-red-500/80 backdrop-blur-xl rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-white">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ScholarDashboard