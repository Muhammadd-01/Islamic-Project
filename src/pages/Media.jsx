import { useState } from 'react'
import { motion } from 'framer-motion'

function Media() {
  const [activeTab, setActiveTab] = useState('videos')

  const videos = [
    { id: 1, title: 'Understanding Tawheed', scholar: 'Sheikh Ahmad', duration: '45:30', views: '125K', thumbnail: '🎥' },
    { id: 2, title: 'The Life of Prophet Muhammad', scholar: 'Dr. Fatima', duration: '1:20:15', views: '250K', thumbnail: '🎥' },
    { id: 3, title: 'Ramadan Preparation', scholar: 'Mufti Ibrahim', duration: '32:45', views: '89K', thumbnail: '🎥' },
    { id: 4, title: 'Islamic Finance Basics', scholar: 'Sheikh Ahmad', duration: '55:20', views: '67K', thumbnail: '🎥' },
  ]

  const podcasts = [
    { id: 1, title: 'Daily Hadith Reflections', episodes: 156, subscribers: '45K', thumbnail: '🎙️' },
    { id: 2, title: 'Islamic History Podcast', episodes: 89, subscribers: '32K', thumbnail: '🎙️' },
    { id: 3, title: 'Quran Tafseer Series', episodes: 234, subscribers: '78K', thumbnail: '🎙️' },
  ]

  const lectures = [
    { id: 1, title: 'The Importance of Salah', date: '2025-01-10', speaker: 'Sheikh Ahmad', duration: '1:15:00' },
    { id: 2, title: 'Building Strong Families', date: '2025-01-08', speaker: 'Dr. Fatima', duration: '50:30' },
    { id: 3, title: 'Youth and Social Media', date: '2025-01-05', speaker: 'Mufti Ibrahim', duration: '42:15' },
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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Islamic Media</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Videos, podcasts, and lectures from verified scholars</p>

          <div className="flex gap-4 mb-12 border-b border-gray-200 dark:border-gray-700 justify-center">
            {['videos', 'podcasts', 'lectures'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-8 font-semibold capitalize transition-all ${
                  activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-gold/20 to-gray-900/20 flex items-center justify-center text-6xl">
                    {video.thumbnail}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{video.title}</h3>
                    <p className="text-gold font-semibold mb-3">{video.scholar}</p>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>⏱️ {video.duration}</span>
                      <span>👁️ {video.views}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'podcasts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <motion.div
                  key={podcast.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 text-center hover-lift cursor-pointer"
                >
                  <div className="text-6xl mb-4">{podcast.thumbnail}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{podcast.title}</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>📝 {podcast.episodes} episodes</p>
                    <p>👥 {podcast.subscribers} subscribers</p>
                  </div>
                  <button className="w-full mt-6 py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                    Subscribe
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'lectures' && (
            <div className="space-y-6">
              {lectures.map((lecture, index) => (
                <motion.div
                  key={lecture.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 flex items-center gap-6"
                >
                  <div className="text-5xl">🎤</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{lecture.title}</h3>
                    <p className="text-gold font-semibold mb-2">{lecture.speaker}</p>
                    <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                      <span>📅 {lecture.date}</span>
                      <span>⏱️ {lecture.duration}</span>
                    </div>
                  </div>
                  <button className="py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                    Watch Now
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          <div className="glass-card rounded-3xl p-8 mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Subscribe to Our Channel</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Get notified about new videos, podcasts, and lectures</p>
            <button className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Media