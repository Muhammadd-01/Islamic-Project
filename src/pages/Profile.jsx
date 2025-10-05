import { useState } from 'react'
import { motion } from 'framer-motion'

function Profile() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)

  const userData = {
    name: 'Abdullah Rahman',
    email: 'abdullah@example.com',
    joinDate: 'January 2024',
    consultations: 5,
    booksRead: 12,
    questionsAsked: 23
  }

  const recentActivity = [
    { type: 'consultation', title: 'Consultation with Sheikh Ahmad', date: '2 days ago' },
    { type: 'book', title: 'Completed: Riyadh as-Salihin', date: '1 week ago' },
    { type: 'question', title: 'Asked about Zakat calculation', date: '2 weeks ago' },
  ]

  const bookmarks = [
    { type: 'verse', content: 'Surah Al-Baqarah, Verse 255', date: '3 days ago' },
    { type: 'book', content: 'Sahih Bukhari - Book of Faith', date: '1 week ago' },
    { type: 'article', content: 'Understanding Tawheed', date: '2 weeks ago' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-gray-900 flex items-center justify-center text-white text-5xl font-bold">
                {userData.name.charAt(0)}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{userData.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{userData.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Member since {userData.joinDate}</p>
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{userData.consultations}</div>
                <p className="text-gray-600 dark:text-gray-400">Consultations</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{userData.booksRead}</div>
                <p className="text-gray-600 dark:text-gray-400">Books Read</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{userData.questionsAsked}</div>
                <p className="text-gray-600 dark:text-gray-400">Questions Asked</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
              {['overview', 'activity', 'bookmarks', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 font-semibold capitalize transition-all ${activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Learning Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">Quran Reading</span>
                        <span className="text-gold">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-gold h-3 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">Islamic Studies</span>
                        <span className="text-gold">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-gold h-3 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">Hadith Collection</span>
                        <span className="text-gold">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-gold h-3 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recent Activity</h3>
                {recentActivity.map((activity, index) => (
                  <div key={index} className="glass p-4 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl">
                      {activity.type === 'consultation' ? '👨‍🏫' : activity.type === 'book' ? '📖' : '❓'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{activity.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'bookmarks' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Saved Bookmarks</h3>
                {bookmarks.map((bookmark, index) => (
                  <div key={index} className="glass p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{bookmark.content}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{bookmark.date}</p>
                    </div>
                    <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Account Settings</h3>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Full Name</label>
                  <input type="text" defaultValue={userData.name} className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Email</label>
                  <input type="email" defaultValue={userData.email} className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Change Password</label>
                  <input type="password" placeholder="New password" className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white" />
                </div>
                <button className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Profile