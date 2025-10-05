import { motion } from 'framer-motion'

function About() {
  const team = [
    { name: 'Sheikh Ahmad Al-Mansoor', role: 'Chief Islamic Scholar', image: '👨‍🏫', bio: '15+ years of Islamic education' },
    { name: 'Dr. Fatima Hassan', role: 'Quran & Tafseer Expert', image: '👩‍🏫', bio: 'PhD in Islamic Studies' },
    { name: 'Mufti Ibrahim Yusuf', role: 'Hadith Specialist', image: '👨‍🏫', bio: '20+ years teaching experience' },
    { name: 'Sarah Ahmed', role: 'AI Technology Lead', image: '👩‍💻', bio: 'Expert in AI & Machine Learning' },
  ]

  const values = [
    { icon: '📖', title: 'Authentic Knowledge', description: 'All content verified by qualified scholars following Ahlus-Sunnah methodology' },
    { icon: '🤝', title: 'Community First', description: 'Building a supportive community of learners and scholars' },
    { icon: '🚀', title: 'Innovation', description: 'Leveraging modern technology to make Islamic knowledge accessible' },
    { icon: '🌍', title: 'Global Reach', description: 'Serving Muslims worldwide in multiple languages' },
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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">About IslamicAI</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
            Bridging traditional Islamic scholarship with cutting-edge AI technology to make authentic Islamic knowledge accessible to everyone
          </p>

          <div className="glass-card rounded-3xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              IslamicAI was founded with a simple yet powerful vision: to make authentic Islamic knowledge accessible to every Muslim, anywhere in the world, at any time.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We combine the wisdom of qualified Islamic scholars with advanced AI technology to provide instant, accurate answers to your Islamic questions, while maintaining the highest standards of authenticity and adherence to the Quran and Sunnah.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-gold font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Join Our Journey</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a student of knowledge, a scholar, or simply curious about Islam, we invite you to be part of our growing community.
            </p>
            <button className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About