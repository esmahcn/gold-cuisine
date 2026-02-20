import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative">

      {/* HERO SECTION PREMIUM */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background animé */}
        <motion.img
          src="/images/homep.jpeg"
          alt="Cuisine moderne"
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />

        {/* Overlay luxe */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* Contenu animé */}
        <div className="relative z-10 max-w-4xl px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[6px] text-yellow-400 mb-6 text-sm"
          >
            Gold Cuisine
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            L’Art de la Cuisine Moderne
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Des cuisines élégantes, modernes et sur mesure conçues pour transformer votre maison.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <Link
              to="/gallery"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
            >
              Voir nos réalisations
            </Link>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>

      </section>

      {/* ABOUT / FEATURES SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pourquoi choisir Gold Cuisine ?
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nous concevons des cuisines modernes alliant design, fonctionnalité et qualité premium.
          Chaque projet est personnalisé selon vos besoins et votre style.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Design Moderne", text: "Des styles contemporains adaptés aux tendances actuelles." },
            { title: "Qualité Premium", text: "Matériaux haut de gamme pour une durabilité exceptionnelle." },
            { title: "Sur Mesure", text: "Chaque cuisine est conçue selon vos dimensions et préférences." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Prêt à transformer votre cuisine ?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
            Demander un devis
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
