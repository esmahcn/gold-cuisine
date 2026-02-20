import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contactez-nous
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Remplissez le formulaire ou contactez-nous directement par téléphone ou email pour un devis personnalisé.
      </motion.p>

      {/* Ici tu pourras ajouter ton formulaire plus tard */}
    </section>
  )
}
