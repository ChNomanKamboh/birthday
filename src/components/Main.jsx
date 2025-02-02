import React, { useState } from 'react';
import img from '../image/cake4.jpg';

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-screen w-full bg-pink-300 flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Button to open popup */}
      <button
        className="border-white border-2 px-5 py-10 rounded-full text-white bg-pink-400/50 hover:bg-pink-300/70 transition"
        onClick={() => setIsOpen(true)}
      >
        Click me!
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/60">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-xl font-semibold mb-4">Hay Mauhtarma!</h2>
            <p className="text-gray-600 mb-4">🎉 "Here's to strong women, happy moments, and a year full of joy—Happy Birthday to my fabulous friend!" 🎂🎈</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
