function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex mb-5 animate-fadeIn ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] p-4 rounded-2xl glass-card ${isUser ? 'bg-gray-900/80 dark:bg-white/80 text-white dark:text-gray-900' : 'bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white'}`}>
        <p className="leading-relaxed">{message.text}</p>
        {message.references && (
          <div className="mt-4 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
            <h4 className="text-sm font-semibold mb-2 text-gold">References:</h4>
            <ul className="text-sm space-y-1 opacity-90">
              {message.references.map((ref, index) => (
                <li key={index}>{ref}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatMessage