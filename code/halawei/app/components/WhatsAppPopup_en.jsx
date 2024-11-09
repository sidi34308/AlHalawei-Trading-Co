import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa"; // Import FaTimes for the close icon

export default function WhatsAppPopup_en() {
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  const [isMinimized, setIsMinimized] = useState(false);

  // Minimize popup
  const handleMinimize = () => {
    setIsMinimized(true);
  };

  // Restore the popup
  const handleRestore = () => {
    setIsMinimized(false);
  };

  // Hide the popup
  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Full-size Popup */}
      {isVisible && !isMinimized && (
        <motion.div
          className="bg-green-500 text-white p-4 rounded-lg w-full shadow-lg w-64 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center font-semibold text-lg p-1">
            <span>Would you like to get in touch via WhatsApp?</span>
            <button
              onClick={handleMinimize}
              className="text-white hover:text-gray-300 border-none nonee"
            >
              <FaTimes className="text-white mx-2" /> {/* Close icon */}
            </button>
          </div>
          <a
            href="https://wa.me/97470700575"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-white text-green-500 px-4 py-2 rounded-full"
          >
            <FaWhatsapp className="inline-block mr-2 text-green-500 " />
            Chat Now
          </a>
        </motion.div>
      )}

      {/* Minimized version (WhatsApp icon) */}
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
