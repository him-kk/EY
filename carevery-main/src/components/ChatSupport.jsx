
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Send, ThumbsUp, ThumbsDown } from "lucide-react"; // Added ThumbsUp, ThumbsDown icons

// export default function ChatSupport() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { type: "bot", text: "Hi! How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false); // New state for showing feedback prompt
//   const [feedbackSent, setFeedbackSent] = useState(false); // New state for tracking if feedback was sent

//   // Handler for sending messages
//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = { type: "user", text: input };
//     setMessages(prevMessages => [...prevMessages, userMessage]);
//     setInput("");
//     setShowFeedback(false); // Hide feedback prompt if user sends a new message
//     setFeedbackSent(false); // Reset feedback status

//     // Simulate bot response after a delay
//     setTimeout(() => {
//       setMessages(prev => {
//         const botResponse = {
//           type: "bot",
//           text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, call us at +91 88888 88888."
//         };
//         return [...prev, botResponse];
//       });
//       setShowFeedback(true); // Show feedback prompt after the bot's response
//     }, 1000);
//   };

//   // Handler for feedback buttons
//   const handleFeedback = (isHelpful) => {
//     console.log("Feedback received:", isHelpful ? "Helpful" : "Not helpful");
//     setFeedbackSent(true); // Mark feedback as sent
//     // In a real application, you would send this feedback to your backend here
//   };

//   // Handler for opening/closing the chat window
//   const handleToggleChat = () => {
//     setIsOpen(prev => {
//       if (!prev) { // If the chat is about to open (was closed)
//         // Reset feedback states and input for a fresh interaction
//         setShowFeedback(false);
//         setFeedbackSent(false);
//         setInput("");
//         // Optionally, reset messages to initial state if you want a new conversation on each open:
//         // setMessages([{ type: "bot", text: "Hi! How can I help you today?" }]);
//       }
//       return !prev;
//     });
//   };

//   return (
//     <>
//       {/* Chat Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={handleToggleChat} // Use the new toggle handler
//         className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#C8A882] to-[#D4B896] rounded-full shadow-2xl flex items-center justify-center z-50 text-white" // Replaced pink with light gold
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
//       </motion.button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white p-4"> {/* Replaced pink with light gold */}
//               <h3 className="font-semibold">Chat Support</h3>
//               <p className="text-sm text-white/90">We typically reply in a few minutes</p>
//             </div>

//             {/* Messages */}
//             <div className="h-96 overflow-y-auto p-4 space-y-4">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div
//                     className={`max-w-[80%] px-4 py-2 rounded-2xl ${
//                       message.type === "user"
//                         ? "bg-[#C8A882] text-white"
//                         : "bg-gray-100 text-gray-900"
//                     }`}
//                   >
//                     {message.text}
//                   </div>
//                 </div>
//               ))}

//               {/* Feedback Prompt */}
//               {showFeedback && !feedbackSent && (
//                 <div className="flex justify-center pt-4">
//                   <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg shadow-sm text-gray-700">
//                     <p className="text-sm mb-2">Was this helpful?</p>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleFeedback(true)}
//                         className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
//                         title="Yes, helpful"
//                       >
//                         <ThumbsUp className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleFeedback(false)}
//                         className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
//                         title="No, not helpful"
//                       >
//                         <ThumbsDown className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Feedback Sent Message */}
//               {feedbackSent && (
//                 <div className="flex justify-center pt-4">
//                   <div className="p-3 bg-gray-50 rounded-lg shadow-sm text-gray-700 text-sm">
//                     Thank you for your feedback!
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Input */}
//             <div className="border-t p-4">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSend()}
//                   placeholder="Type your message..."
//                   className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A882]"
//                 />
//                 <button
//                   onClick={handleSend}
//                   className="w-10 h-10 bg-[#C8A882] text-white rounded-full flex items-center justify-center hover:bg-[#D4B896] transition-colors" // Replaced pink with light gold on hover
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, Loader } from "lucide-react";

// Gemini AI Configuration
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: "bot", 
      text: "Hi! I'm your AI assistant for CarGuardian. How can I help you with your vehicle today?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Generate AI response using Gemini
  const generateAIResponse = async (userMessage) => {
    try {
      const context = `You are a helpful AI assistant for CarGuardian AI, a vehicle maintenance and predictive care service. 
      
      Company Info:
      - We provide AI-powered predictive vehicle maintenance
      - We monitor vehicles 24/7 and alert users 2-4 weeks before problems occur
      - We have 500+ service centers across India
      - Plans start at ₹999/month with 30-day free trial
      - Contact: +91 88888 88888 | support@carguardian.ai
      
      Services:
      - Engine Service (₹2,500)
      - Brake Service (₹4,500)
      - AC Service (₹3,500)
      - Battery Check (₹800)
      - Tire Service (₹2,000)
      - Full Inspection (₹1,500)
      
      Your role:
      - Answer questions about services, pricing, and vehicle maintenance
      - Be friendly, concise, and helpful
      - If asked to book, provide phone number and website
      - Focus on vehicle care and our services
      
      User Question: ${userMessage}
      
      Provide a helpful, concise response (max 100 words):`;

      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: context
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response from AI');
      }
    } catch (error) {
      console.error('Gemini AI Error:', error);
      return "I apologize, but I'm having trouble connecting right now. Please call us at +91 88888 88888 or email support@carguardian.ai for immediate assistance.";
    }
  };

  // Handle sending messages
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");
    setShowFeedback(false);
    setFeedbackSent(false);
    setIsTyping(true);

    // Generate AI response
    const aiResponse = await generateAIResponse(input);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { type: "bot", text: aiResponse }]);
    setShowFeedback(true);
  };

  // Handle feedback
  const handleFeedback = async (isHelpful) => {
    console.log("Feedback received:", isHelpful ? "Helpful" : "Not helpful");
    setFeedbackSent(true);
    
    // Optional: Send feedback to Firebase
    try {
      // You can save feedback to Firestore here
      // await addDoc(collection(db, 'chatFeedback'), {
      //   helpful: isHelpful,
      //   message: messages[messages.length - 1].text,
      //   timestamp: new Date()
      // });
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  // Toggle chat window
  const handleToggleChat = () => {
    setIsOpen(prev => {
      if (!prev) {
        setShowFeedback(false);
        setFeedbackSent(false);
        setInput("");
      }
      return !prev;
    });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#C8A882] to-[#D4B896] rounded-full shadow-2xl flex items-center justify-center z-50 text-white hover:shadow-3xl transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">AI Chat Support</h3>
                  <p className="text-sm text-white/90">Powered by Gemini AI</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white"
                        : "bg-white text-gray-900 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#C8A882] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#C8A882] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-[#C8A882] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Feedback Prompt */}
              {showFeedback && !feedbackSent && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-center pt-2"
                >
                  <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm text-gray-700 border border-gray-200">
                    <p className="text-xs mb-2 font-medium">Was this helpful?</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleFeedback(true)}
                        className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                        title="Yes, helpful"
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleFeedback(false)}
                        className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                        title="No, not helpful"
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Feedback Sent Message */}
              {feedbackSent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center"
                >
                  <div className="p-2 bg-green-50 rounded-lg text-green-700 text-xs font-medium">
                    ✓ Thank you for your feedback!
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t bg-white p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isTyping && handleSend()}
                  placeholder="Ask me anything about your vehicle..."
                  disabled={isTyping}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A882] focus:border-transparent disabled:bg-gray-100 text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTyping ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Google Gemini AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}