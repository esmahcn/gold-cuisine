import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import HeroSlider from "../components/HeroSlider"

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        {/* Automatic Luxury Slider */}
        <HeroSlider />

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Gold Light Effect */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 
        w-[900px] h-[500px] bg-yellow-500/10 blur-[150px] 
        animate-pulse z-10"></div>


       {/* BUTTON POSITION */}
<div className="absolute top-[65%] left-1/2 -translate-x-1/2 z-20">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.6 }}
  >

    <Link
      to="/gallery"
      className="bg-yellow-500 text-black font-semibold 
      px-12 py-4 rounded-full 
      shadow-lg hover:shadow-yellow-500/40
      transition duration-300"
    >
      Voir nos réalisations
    </Link>

  </motion.div>

</div>
        {/* Scroll Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >

          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />

          </div>

        </motion.div>

      </section>


      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">

        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Pourquoi choisir Gold Cuisine ?
        </motion.h2>


        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Nous concevons des cuisines modernes alliant design et qualité premium.
        </motion.p>


        <div className="grid md:grid-cols-3 gap-8">

          {[
            { title: "Design Moderne", text: "Styles modernes et élégants" },
            { title: "Qualité Premium", text: "Matériaux haut de gamme" },
            { title: "Sur Mesure", text: "Fabrication personnalisée" },

          ].map((item, index) => (

            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg 
              hover:shadow-2xl hover:-translate-y-2 
              transition duration-500 border border-gray-100"

              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >

              <h3 className="text-xl font-semibold mb-3 text-yellow-600">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>



      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 text-center">

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Prêt à transformer votre cuisine ?
        </motion.h2>


        <Link
          to="/contact"
          className="bg-yellow-500 hover:bg-yellow-400 
          text-black font-semibold 
          px-8 py-3 rounded-full 
          shadow-lg transition duration-300"
        >
          Demander un devis
        </Link>

      </section>

    </div>
  )
}