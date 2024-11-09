import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa"; // Import FaTimes for the close icon

export default function WhatsAppPopup_ar() {
  const [isVisible, setIsVisible] = useState(true); // تبدأ بالظهور
  const [isMinimized, setIsMinimized] = useState(false);

  // تصغير النافذة
  const handleMinimize = () => {
    setIsMinimized(true);
  };

  // استعادة النافذة
  const handleRestore = () => {
    setIsMinimized(false);
  };

  // إخفاء النافذة
  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* نافذة كاملة */}
      {isVisible && !isMinimized && (
        <motion.div
          className="bg-green-500 text-white p-4 rounded-lg shadow-lg w-64 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center font-semibold text-lg p-1">
            <span>هل ترغب في التواصل عبر واتساب؟</span>
            <button
              onClick={handleMinimize}
              className="text-white hover:text-gray-300 border-none nonee"
            >
              <FaTimes className="text-white" /> {/* Close icon */}
            </button>
          </div>
          <a
            href="https://wa.me/97470700575"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-white text-green-500 px-4 py-2 rounded-full"
          >
            <FaWhatsapp className="inline-block ml-2 text-green-500" />
            تواصل معنا الآن
          </a>
        </motion.div>
      )}

      {/* النسخة المصغرة (أيقونة واتساب) */}
      {isVisible && isMinimized && (
        <motion.div
          className="flex justify-center items-center bg-green-500 text-white w-16 h-16 rounded-full cursor-pointer"
          onClick={handleRestore}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaWhatsapp className="text-2xl" />
        </motion.div>
      )}
    </div>
  );
}
