import { motion } from 'framer-motion'

function Roadmap() {
  const milestones = [
    {
      quarter: 'Q1 2025',
      status: 'completed',
      items: [
        { title: 'Platform Launch', description: 'Initial release with core features', done: true },
        { title: 'AI Chat Integration', description: 'Islamic Q&A powered by AI', done: true },
        { title: 'Scholar Consultations', description: 'Book 1:1 sessions with scholars', done: true },
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'in-progress',
      items: [
        { title: 'Mobile Apps', description: 'iOS and Android applications', done: false },
        { title: 'Advanced Quran Features', description: 'Tafseer, translations, and audio', done: false },
        { title: 'Community Forums', description: 'Discussion boards for users', done: false },
      ]
    },
    {
      quarter: 'Q3 2025',
      status: 'planned',
      items: [
        { title: 'Live Classes', description: 'Interactive group learning sessions', done: false },
        { title: 'Certification Programs', description: 'Verified Islamic education certificates', done: false },
        { title: 'Multi-language Support', description: 'Platform in 10+ languages', done: false },
      ]
    },
    {
      quarter: 'Q4 2025',
      status: 'planned',
      items: [
        { title: 'AI Voice Assistant', description: 'Voice-based Islamic guidance', done: false },
        { title: 'Virtual Islamic Library', description: '10,000+ digitized books', done: false },
        { title: 'Global Scholar Network', description: '100+ verified scholars worldwide', done: false },
      ]
    },
  ]

  const features = [
    { title: 'Enhanced AI', description: 'More accurate and contextual responses', votes: 234 },
    { title: 'Prayer Reminders', description: 'Smart notifications for Salah times', votes: 189 },
    { title: 'Islamic Calendar', description: 'Hijri calendar with events', votes: 156 },
    { title: 'Zakat Calculator', description: 'Advanced calculation tools', votes: 142 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Product Roadmap</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Our vision for the future of Islamic learning</p>

          <div className="space-y-12 mb-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    milestone.status === 'completed' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                    milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' :
                    'bg-gray-500/20 text-gray-600 dark:text-gray-400'
                  }`}>
                    {milestone.status === 'completed' ? '✓' : milestone.status === 'in-progress' ? '⏳' : '📅'}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{milestone.quarter}</h2>
                    <p className={`font-semibold capitalize ${
                      milestone.status === 'completed' ? 'text-green-600 dark:text-green-400' :
                      milestone.status === 'in-progress' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-gray-600 dark:text-gray-400'
                    }`}>
                      {milestone.status.replace('-', ' ')}
                    </p>
                  </div>
                </div>

                <div className="ml-20 space-y-4">
                  {milestone.items.map((item, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                      <div className={`text-2xl ${item.done ? 'opacity-100' : 'opacity-50'}`}>
                        {item.done ? '✅' : '⭕'}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Requested Features</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Vote for features you'd like to see next</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="glass p-6 rounded-xl flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">{feature.votes}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">votes</div>
                    </div>
                    <button className="py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                      Vote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Have a Feature Request?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">We'd love to hear your ideas for improving the platform</p>
            <button className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Submit Idea
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Roadmap