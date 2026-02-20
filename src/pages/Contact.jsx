import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <motion.img
          src="/images/homep.jpeg"
          alt="Contact Gold Cuisine"
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.h1
          className="relative text-4xl md:text-6xl font-bold z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contactez-nous
        </motion.h1>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Infos de contact */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos coordonnées</h2>

          <div className="flex items-start gap-4">
            <span className="text-yellow-500 text-2xl">📞</span>
            <p className="text-gray-600">WhatsApp : <a href="https://wa.me/213557075875" target="_blank" className="text-yellow-500 font-semibold">0557 07 58 75</a></p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-yellow-500 text-2xl">✉️</span>
            <p className="text-gray-600">Email : <a href="mailto:goldcuisine11@gmail.com" className="text-yellow-500 font-semibold">goldcuisine11@gmail.com</a></p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-yellow-500 text-2xl">📍</span>
            <p className="text-gray-600">Adresse : Lotissement 11N22 centre Hammadi, Boumerdes</p>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Votre nom"
            className="border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            placeholder="Votre message"
            className="border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none h-40"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
            Envoyer
          </button>
        </motion.form>

      </section>

      {/* CTA */}
      <section className="relative bg-gray-900 text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 blur-3xl"></div>
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Prêt à discuter de votre projet ?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a
            href="https://wa.me/213557075875"
            target="_blank"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
            Contactez-nous sur WhatsApp
          </a>
        </motion.div>
      </section>

    </div>
  )
}