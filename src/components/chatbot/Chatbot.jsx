import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Heart, Send } from 'lucide-react';

const quickReplies = [
  "How do I register?",
  "What organs can I donate?",
  "Does religion affect donation?",
  "Will my family pay anything?",
];

const botResponses = {
  "how do i register?": "To register as an organ donor, go to the 'Register' page, fill out your personal details, select organs you wish to donate, and provide consent. You'll receive a donor certificate with a unique ID.",
  "what organs can i donate?": "You can donate heart, lungs, liver, kidneys, pancreas, intestines, eyes (corneas), skin, and bone marrow. Living donors can donate one kidney, part of the liver, or bone marrow.",
  "does religion affect donation?": "All major religions including Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism support organ donation as an act of compassion.",
  "will my family pay anything?": "No. The donor's family never bears any cost. All medical expenses related to organ donation are covered.",
  "default": "I'm here to help you understand organ donation. You can ask about registration, what organs can be donated, religious views, costs, or other questions."
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: 1, type: 'bot', text: "Hello! I'm here to help you learn about organ donation. How can I assist you today?" }]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;
    const userMessage = { id: Date.now(), type: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const lowerText = text.toLowerCase().trim();
      const response = botResponses[lowerText] || botResponses['default'];
      const botMessage = { id: Date.now() + 1, type: 'bot', text: response };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-life-green text-white shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Heart className="w-8 h-8 fill-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 w-full sm:w-[360px] h-full bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col">
            <div className="bg-deep-forest dark:bg-gray-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-life-red fill-life-red" />
                <div>
                  <h3 className="font-semibold">Save a Life Assistant</h3>
                  <p className="text-xs text-white/70">AI-powered support</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${message.type === 'user' ? 'bg-life-green text-white rounded-br-md' : 'bg-gray-100 dark:bg-gray-800 text-rich-black dark:text-white rounded-bl-md'}`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {quickReplies.map((reply, index) => (
                    <button key={index} onClick={() => handleSend(reply)} className="px-3 py-2 text-sm bg-mint-tint dark:bg-gray-800 text-medical-green rounded-full hover:bg-life-green hover:text-white transition-colors">
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your question..." className="flex-1 px-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green text-sm" />
                <button type="submit" className="w-12 h-12 rounded-full bg-life-green text-white flex items-center justify-center hover:bg-medical-green transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
