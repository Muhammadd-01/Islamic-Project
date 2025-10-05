function ArticleCard({ article }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{article.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{article.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
          <span className="font-medium">{article.author}</span>
          <span>{article.date}</span>
        </div>
        <button className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
          Read More
        </button>
      </div>
    </div>
  )
}

export default ArticleCard