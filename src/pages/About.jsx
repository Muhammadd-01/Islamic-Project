import { motion } from 'framer-motion'

function About() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Islamic AI Platform</h1>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                To provide authentic Islamic guidance in the digital age by combining 
                cutting-edge AI technology with traditional Islamic scholarship rooted 
                in the Quran, Sunnah, and the understanding of Ahlus-Sunnah wal-Jamaah.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Methodology</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                All responses are based on the Quran, authentic Hadith, and the consensus 
                of recognized Islamic scholars. Our AI is trained on verified Islamic texts 
                and all answers are reviewed by qualified scholars before publication.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Scholarly Advisory Board</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Our platform is guided by a board of qualified scholars specializing in 
                Aqeedah, Fiqh, Hadith, and contemporary Islamic issues. They ensure all 
                content aligns with authentic Islamic teachings.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Ahlus-Sunnah wal-Jamaah?</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                We follow the methodology of the Prophet Muhammad ﷺ and his companions, 
                as understood by the early generations of Muslims. This ensures our guidance 
                is rooted in authentic sources and free from innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About