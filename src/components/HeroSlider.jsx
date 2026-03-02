import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSlider() {

  const slides = [

    {
      image: "/images/homep.jpeg",
      title: "Gold Cuisine",
      text: "Cuisines modernes et élégantes"
    },

    {
      image: "/images/r30.jpeg",
      title: "Design Moderne",
      text: "Des styles modernes et luxueux"
    },

    {
      image: "/images/r13.jpeg",
      title: "Qualité Premium",
      text: "Matériaux haut de gamme"
    },

    {
      image: "/images/r8.jpeg",
      title: "Fabrication Sur Mesure",
      text: "Cuisine adaptée à votre espace"
    },

    {
      image: "/images/r19.jpeg",
      title: "Élégance",
      text: "Design unique et raffiné"
    },

    {
      image: "/images/r23.jpeg",
      title: "Professionnel",
      text: "Installation rapide et garantie"
    }

  ]


  const [index, setIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [])



  return (

    <div className="absolute inset-0">


      <AnimatePresence>

        <motion.img

          key={index}

          src={slides[index].image}

          className="absolute w-full h-full object-cover"


          initial={{
            opacity: 0,
            scale: 1.1
          }}


          animate={{
            opacity: 1,
            scale: 1
          }}


          exit={{
            opacity: 0
          }}


          transition={{
            duration: 2
          }}

        />

      </AnimatePresence>



      {/* TEXT ON IMAGE */}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">


        <AnimatePresence mode="wait">


          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: -40
            }}

            transition={{
              duration: 1
            }}

          >


            <h1 className="text-4xl md:text-6xl font-bold mb-4">

              {slides[index].title}

            </h1>



            <p className="text-lg md:text-xl text-gray-200">

              {slides[index].text}

            </p>


          </motion.div>


        </AnimatePresence>


      </div>


    </div>

  )
}