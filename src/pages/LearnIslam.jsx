import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function LearnIslam() {
  const courses = [
    { title: 'Pillars of Islam', level: 'Beginner', duration: '4 weeks', lessons: 12, icon: '🕌' },
    { title: 'Quran Recitation', level: 'Beginner', duration: '8 weeks', lessons: 24, icon: '📖' },
    { title: 'Islamic History', level: 'Intermediate', duration: '6 weeks', lessons: 18, icon: '📜' },
    { title: 'Fiqh Essentials', level: 'Intermediate', duration: '10 weeks', lessons: 30, icon: '⚖️' },
    { title: 'Hadith Sciences', level: 'Advanced', duration: '12 weeks', lessons: 36, icon: '📚' },
    { title: 'Tafseer Studies', level: 'Advanced', duration: '16 weeks', lessons: 48, icon: '🔍' },
  ]

  const learningPaths = [
    { name: 'New Muslim Path', description: 'Essential knowledge for new Muslims', courses: 5, icon: '🌟' },
    { name: 'Youth Program', description: 'Islamic education for young learners', courses: 8, icon: '👦' },
    { name: 'Scholar Track', description: 'Advanced Islamic studies program', courses: 12, icon: '🎓' },
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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Learn Islam</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Structured courses to deepen your Islamic knowledge</p>

          <div className="glass-card rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl text-center hover-lift cursor-pointer"
                >
                  <div className="text-6xl mb-4">{path.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{path.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
                  <p className="text-gold font-semibold">{path.courses} courses</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Available Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover-lift"
                >
                  <div className="text-5xl mb-4">{course.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' :
                      'bg-red-500/20 text-red-600 dark:text-red-400'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                    <p>⏱️ {course.duration}</p>
                    <p>📝 {course.lessons} lessons</p>
                  </div>
                  <button className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                    Enroll Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Not Sure Where to Start?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Take our quick assessment to find the perfect learning path for you</p>
            <button className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Take Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LearnIslam