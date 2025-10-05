import { motion } from 'framer-motion'

function Profile() {
  const user = {
    name: "Ahmed Abdullah",
    email: "ahmed@example.com",
    joinDate: "January 2024",
    consultations: 5,
    questionsAsked: 23
  }

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Profile</h1>

          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gray-900 flex items-center justify-center text-white text-4xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Member since {user.joinDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{user.consultations}</div>
                <p className="text-gray-600 dark:text-gray-400">Consultations Booked</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-gold mb-2">{user.questionsAsked}</div>
                <p className="text-gray-600 dark:text-gray-400">Questions Asked</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Account Settings</h3>
            <div className="space-y-4">
              <button className="w-full py-4 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-left text-gray-900 dark:text-white">
                Edit Profile
              </button>
              <button className="w-full py-4 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-left text-gray-900 dark:text-white">
                Change Password
              </button>
              <button className="w-full py-4 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-left text-gray-900 dark:text-white">
                Notification Preferences
              </button>
              <button className="w-full py-4 px-6 bg-red-500/80 backdrop-blur-xl rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-left text-white">
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile