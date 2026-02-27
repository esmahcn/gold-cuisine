import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import HeroSlider from "../components/HeroSlider"

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO SECTION CINEMATIC */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background image zoom slow */}
        <motion.img
          src="/images/homep.jpeg"
          alt="Cuisine moderne"
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
        />

        {/* Overlay cinematic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        {/* Halo gold subtle */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[140px] animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">

          <motion.p
            initial={{ opacity: 0, letterSpacing: "2px" }}
            animate={{ opacity: 1, letterSpacing: "6px" }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[6px] text-yellow-400 mb-6 text-sm"
          >
            Gold Cuisine
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            L’Art de la Cuisine Moderne
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Des cuisines élégantes, modernes et sur mesure conçues pour transformer votre maison.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <Link
              to="/gallery"
              className="relative inline-block bg-yellow-500 text-black font-semibold px-12 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40 overflow-hidden group"
            >
              <span className="relative z-10">
                Voir nos réalisations
              </span>

              {/* Button glow effect */}
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>

      </section>

      {/* ABOUT / FEATURES SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">

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
          className="text-gray-600 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Nous concevons des cuisines modernes alliant design, fonctionnalité et qualité premium.
          Chaque projet est personnalisé selon vos besoins et votre style.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Design Moderne", text: "Des styles contemporains adaptés aux tendances actuelles." },
            { title: "Qualité Premium", text: "Matériaux haut de gamme pour une durabilité exceptionnelle." },
            { title: "Sur Mesure", text: "Chaque cuisine est conçue selon vos dimensions et préférences." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION PREMIUM */}
      <section className="relative bg-gray-900 text-white py-20 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 blur-3xl"></div>

        <motion.h2
          className="relative text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Prêt à transformer votre cuisine ?
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
            Demander un devis
          </Link>
        </motion.div>
      </section>

    </div>
  )
}