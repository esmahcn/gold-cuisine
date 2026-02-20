import { Link } from "react-router-dom" // <-- IMPORTANT
import { motion } from "framer-motion"
import aboutImg from "/images/about.jpeg" // Assure-toi que l'image existe

export default function About() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <motion.img
          src={aboutImg}
          alt="À propos"
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            À propos de Gold Cuisine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl"
          >
            Fabrication de cuisines modernes et mobilier sur mesure adaptés à vos besoins et votre style.
          </motion.p>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Notre mission et nos valeurs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Qualité Premium", text: "Matériaux haut de gamme et durabilité exceptionnelle." },
            { title: "Design Sur Mesure", text: "Chaque cuisine est unique et personnalisée selon vos besoins." },
            { title: "Service Client", text: "Accompagnement complet du projet jusqu’à la livraison." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 blur-3xl"></div>
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Découvrez nos réalisations
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link
            to="/gallery"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </section>
    </div>
  )
}