import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MusicPlayer() {

  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }

  }

  return (

    <div className="fixed bottom-6 left-6 z-50">

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/images/bg-music2.mp3" type="audio/mp3" />
      </audio>


      {/* Glass Button */}
      <motion.button

        onClick={toggleMusic}

        animate={{
          rotate: playing ? 360 : 0
        }}

        transition={{
          repeat: playing ? Infinity : 0,
          duration: 6,
          ease: "linear"
        }}

        className="
        w-10 h-10
        rounded-full
        backdrop-blur-md
        bg-white/30
        border border-white/40
        shadow-lg
        flex
        items-center
        justify-center
        text-white
        hover:scale-110
        transition
        "

      >

        🎵

      </motion.button>


    </div>

  )
}