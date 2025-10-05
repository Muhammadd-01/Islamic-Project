import { motion } from 'framer-motion'

function Scholars() {
  const scholars = [
    {
      name: 'Sheikh Ahmad Al-Mansoor',
      specialty: 'Fiqh & Islamic Law',
      education: 'PhD Islamic Jurisprudence, Al-Azhar University',
      experience: '15 years',
      languages: ['Arabic', 'English', 'Urdu'],
      rating: 4.9,
      reviews: 234,
      image: '👨‍🏫',
      bio: 'Specialized in contemporary Islamic jurisprudence and comparative fiqh. Has authored several books on Islamic law and modern challenges.'
    },
    {
      name: 'Dr. Fatima Hassan',
      specialty: 'Quran & Tafseer',
      education: 'PhD Quranic Studies, Islamic University of Madinah',
      experience: '12 years',
      languages: ['Arabic', 'English', 'French'],
      rating: 4.8,
      reviews: 189,
      image: '👩‍🏫',
      bio: 'Expert in Quranic exegesis and Arabic linguistics. Focuses on making Tafseer accessible to modern audiences.'
    },
    {
      name: 'Mufti Ibrahim Yusuf',
      specialty: 'Hadith & Aqeedah',
      education: 'Masters in Hadith Sciences, Darul Uloom',
      experience: '20 years',
      languages: ['Arabic', 'English', 'Bengali'],
      rating: 5.0,
      reviews: 312,
      image: '👨‍🏫',
      bio: 'Renowned scholar of Hadith sciences and Islamic creed. Known for his clear explanations of complex theological concepts.'
    },
    {
      name: 'Sheikh Yusuf Al-Qaradawi Jr.',
      specialty: 'Contemporary Issues',
      education: 'PhD Islamic Studies, University of Oxford',
      experience: '10 years',
      languages: ['Arabic', 'English'],
      rating: 4.7,
      reviews: 156,
      image: '👨‍🏫',
      bio: 'Focuses on Islamic perspectives on modern challenges including technology, finance, and social issues.'
    },
    {
      name: 'Dr. Aisha Rahman',
      specialty: 'Family & Marriage',
      education: 'PhD Islamic Psychology, International Islamic University',
      experience: '14 years',
      languages: ['Arabic', 'English', 'Malay'],
      rating: 4.9,
      reviews: 201,
      image: '👩‍🏫',
      bio: 'Specialist in Islamic family law and counseling. Helps families navigate challenges with Islamic guidance.'
    },
    {
      name: 'Sheikh Omar Abdullah',
      specialty: 'Islamic Finance',
      education: 'Masters Islamic Banking, INCEIF Malaysia',
      experience: '11 years',
      languages: ['Arabic', 'English'],
      rating: 4.6,
      reviews: 134,
      image: '👨‍🏫',
      bio: 'Expert in Islamic economics and Shariah-compliant finance. Advises on halal investments and business practices.'
    },
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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Our Scholars</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Learn from qualified scholars with authentic Islamic education</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholars.map((scholar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{scholar.image}</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{scholar.name}</h3>
                  <p className="text-gold font-semibold mb-2">{scholar.specialty}</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="font-bold text-gray-900 dark:text-white">{scholar.rating}</span>
                    <span className="text-gray-600 dark:text-gray-400">({scholar.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🎓</span>
                    <p className="text-gray-700 dark:text-gray-300">{scholar.education}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⏱️</span>
                    <p className="text-gray-700 dark:text-gray-300">{scholar.experience} experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🌍</span>
                    <p className="text-gray-700 dark:text-gray-300">{scholar.languages.join(', ')}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{scholar.bio}</p>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                    Book Session
                  </button>
                  <button className="py-3 px-4 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Become a Scholar</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Are you a qualified Islamic scholar? Join our platform to teach and guide students worldwide.</p>
            <button className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Scholars