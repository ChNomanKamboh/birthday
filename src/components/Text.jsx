import React, { useEffect, useRef, useState } from "react"

function Text() {
  const messages = [
    "Mehak, you are a true blessing in this world! 🌹 May your life be as beautiful as your heart, and may happiness surround you always! 🌟💖",
    "Wishing you endless joy, love, and success, Hafiza Sahiba! 🎉🌸 May you live a life full of bright moments and unforgettable memories! 🌈💫",
    "To the most amazing person, Mehak! 🌺 Your smile is a gift to this world. May your days be filled with love, peace, and all your heart's desires! 💕🌟",
    "May you live long, Mehak, with health, happiness, and many more years to come! 🌻🎂 You are truly one in a million! 💖✨",
    "Hafiza Sahiba, your kindness and beauty brighten everyone's life. 💕 I wish you a life full of blessings, love, and countless reasons to smile! 😊🌸",
    "To my dear Hafiza Sahiba, Mehak! 💖 May you have a life full of adventures, laughter, and success. Here's to many more years of happiness! 🎉🌟",
  ]

  const [visibleMessages, setVisibleMessages] = useState([])
  const messageRefs = useRef(messages.map(() => React.createRef()))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = messageRefs.current.findIndex((ref) => ref.current === entry.target)
            if (index !== -1 && !visibleMessages.includes(index)) {
              setVisibleMessages((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    )

    messageRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      messageRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [visibleMessages]) // Added visibleMessages to the dependency array

  return (
    <div className="container mx-auto px-4 py-8">
      {messages.map((message, index) => (
        <div
          key={index}
          ref={messageRefs.current[index]}
          className={`
            text-gray-500 mb-6 p-4 rounded-lg shadow-md 
            transition-all duration-500 ease-in-out transform
            ${visibleMessages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            hover:scale-105 hover:shadow-lg
          `}
        >
          {message}
        </div>
      ))}
    </div>
  )
}

export default Text

