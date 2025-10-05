import { useState } from 'react'
import { motion } from 'framer-motion'

function ScholarDashboard() {
  const [activeTab, setActiveTab] = useState('appointments')

  const upcomingAppointments = [
    { id: 1, student: 'Ahmad Ali', topic: 'Marriage in Islam', date: '2025-01-15', time: '10:00 AM', status: 'confirmed' },
    { id: 2, student: 'Fatima Khan', topic: 'Zakat Calculation', date: '2025-01-15', time: '2:00 PM', status: 'pending' },
    { id: 3, student: 'Ibrahim Hassan', topic: 'Business Ethics', date: '2025-01-16', time: '11:00 AM', status: 'confirmed' },
  ]

  const pendingQuestions = [
    { id: 1, student: 'Aisha Rahman', question: 'What is the ruling on cryptocurrency in Islam?', date: '2 hours ago' },
    { id: 2, student: 'Yusuf Ahmed', question: 'Can I pray Taraweeh at home?', date: '5 hours ago' },
    { id: 3, student: 'Maryam Ali', question: 'How to calculate Zakat on gold?', date: '1 day ago' },
  ]

  const stats = {
    totalConsultations: 156,
    pendingAppointments: 3,
    questionsAnswered: 234,
    rating: 4.9
  }

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
          <div className="glass-card rounded-3xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Scholar Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Manage your consultations and student questions</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{stats.totalConsultations}</div>
                <p className="text-gray-600 dark:text-gray-400">Total Consultations</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{stats.pendingAppointments}</div>
                <p className="text-gray-600 dark:text-gray-400">Pending Appointments</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{stats.questionsAnswered}</div>
                <p className="text-gray-600 dark:text-gray-400">Questions Answered</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{stats.rating}</div>
                <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
              {['appointments', 'questions', 'schedule', 'earnings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 font-semibold capitalize transition-all ${activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'appointments' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Appointments</h3>
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="glass p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{appointment.student}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{appointment.topic}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${appointment.status === 'confirmed' ? 'bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span>📅 {appointment.date}</span>
                      <span>🕐 {appointment.time}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 py-2 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                        Join Meeting
                      </button>
                      <button className="py-2 px-4 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                        Reschedule
                      </button>
                      <button className="py-2 px-4 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-red-600 dark:text-red-400">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'questions' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Pending Questions</h3>
                {pendingQuestions.map((question) => (
                  <div key={question.id} className="glass p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-900 dark:text-white">{question.student}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-500">{question.date}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{question.question}</p>
                    <div className="flex gap-3">
                      <button className="flex-1 py-2 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                        Answer Question
                      </button>
                      <button className="py-2 px-4 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Manage Availability</h3>
                <div className="glass p-6 rounded-xl">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Set your available hours for consultations</p>
                  <div className="space-y-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center gap-4">
                        <label className="flex items-center gap-2 w-32">
                          <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-gold" />
                          <span className="font-semibold text-gray-900 dark:text-white">{day}</span>
                        </label>
                        <input type="time" defaultValue="09:00" className="p-2 rounded-lg glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none text-gray-900 dark:text-white" />
                        <span className="text-gray-600 dark:text-gray-400">to</span>
                        <input type="time" defaultValue="17:00" className="p-2 rounded-lg glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none text-gray-900 dark:text-white" />
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
                    Save Schedule
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Earnings Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="glass p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gold mb-2">$2,450</div>
                    <p className="text-gray-600 dark:text-gray-400">This Month</p>
                  </div>
                  <div className="glass p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gold mb-2">$18,900</div>
                    <p className="text-gray-600 dark:text-gray-400">This Year</p>
                  </div>
                  <div className="glass p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gold mb-2">$850</div>
                    <p className="text-gray-600 dark:text-gray-400">Pending Payout</p>
                  </div>
                </div>
                <button className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
                  Request Payout
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ScholarDashboard