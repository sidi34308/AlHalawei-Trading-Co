import { useState, useEffect } from "react";
import { X } from "lucide-react"; // Import close icon

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after the page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); // Delay for 800ms

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleClose = () => {
    // Hide with exit animation
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className={`fixed bottom-6 left-6 bg-green-600 z-20 text-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">
            💬 <strong>Contact us via WhatsApp</strong>
          </p>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="ml-2 hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="mt-2">
          For any inquiries, click here for direct communication.
        </p>
        <a
          href="https://wa.me/0097455570274" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-white text-green-600 font-bold rounded-lg shadow hover:bg-gray-200 transition-colors duration-300"
        >
          Contact Now
        </a>
      </div>
    )
  );
}
