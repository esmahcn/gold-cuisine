import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSlider() {

  const slides = [

    {
      image: "/images/homep.jpeg",
      title: "Cuisines Modernes",
      text: "Design élégant et fabrication sur mesure"
    },

    {
      image: "/images/r1.jpeg",
      title: "Qualité Premium",
      text: "Matériaux haut de gamme"
    },

    {
      image: "/images/r12.jpeg",
      title: "Dressing Sur Mesure",
      text: "Optimisez votre espace"
    }

  ]


  const [index, setIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )

    }, 4000)

    return () => clearInterval(interval)

  }, [])



  return (

    <div className="relative h-[80vh] overflow-hidden">

      <AnimatePresence>

        <motion.img

          key={index}

          src={slides[index].image}

          className="absolute w-full h-full object-cover"

          initial={{ opacity: 0, scale: 1.1 }}

          animate={{ opacity: 1, scale: 1 }}

          exit={{ opacity: 0 }}

          transition={{ duration: 1 }}

        />

      </AnimatePresence>


      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/60"></div>


      {/* Text */}

      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-6">


        <motion.h1

          key={slides[index].title}

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-4xl md:text-6xl font-bold mb-4"

        >

          {slides[index].title}

        </motion.h1>


        <motion.p

          key={slides[index].text}

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-lg md:text-xl"

        >

          {slides[index].text}

        </motion.p>

      </div>


    </div>

  )

}