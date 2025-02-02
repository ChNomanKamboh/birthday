import { useRef, useState, useEffect } from "react"
import audio from "../image/birthday.mp3"

function Cards() {
  const audioRef = useRef(new Audio(audio))
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const audioElement = audioRef.current

    const playAudio = () => {
      audioElement
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => console.log("Audio Play Error:", error))
    }

    const handleAudioEnd = () => {
      audioElement.currentTime = 0 // Reset to the beginning
      playAudio() // Play again
    }

    audioElement.addEventListener("ended", handleAudioEnd)

    playAudio() // Initial play

    return () => {
      audioElement.removeEventListener("ended", handleAudioEnd)
      audioElement.pause()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handlePlayMusic = () => {
    const audioElement = audioRef.current
    if (!isPlaying) {
      audioElement
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => console.log("Audio Play Error:", error))
    } else {
      audioElement.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      className={`
        fixed top-0 left-0 w-full
        ${scrolled ? "bg-pink-400/80 py-2" : "bg-transparent py-6"}
        transition-all duration-300
        rounded-b-[100px] md:rounded-b-[150px] lg:rounded-b-[200px]
        flex justify-around items-center
        px-4
        z-10
      `}
    >
      <h1
        className={`
        text-white font-bold text-center
        ${scrolled ? "text-xl md:text-2xl lg:text-3xl" : "text-2xl md:text-3xl lg:text-4xl"}
        transition-all duration-300
      `}
      >
        Happy Birthday 🎉
      </h1>
      <button
        onClick={handlePlayMusic}
        className={`
          px-4 py-1 md:px-5 md:py-2
          bg-pink-300 text-white font-semibold rounded-full
          hover:bg-pink-200 transition duration-300
          ${scrolled ? "text-sm md:text-base lg:text-lg" : "text-base md:text-lg lg:text-xl"}
        `}
      >
        {isPlaying ? "Pause 🎵" : "Play 🎵"}
      </button>
    </div>
  )
}

export default Cards

