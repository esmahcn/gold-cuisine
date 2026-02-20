import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        À propos de Gold Cuisine
      </motion.h1>
      <motion.p
        className="text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Nous sommes spécialisés dans la fabrication de cuisines modernes et de mobilier de décoration sur mesure. Chaque projet est unique et adapté aux besoins de nos clients.
      </motion.p>
    </section>
  )
}
