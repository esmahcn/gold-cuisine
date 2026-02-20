import { motion } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

export default function Gallery() {
  const galleryImages = [
    "/images/r1.jpeg", "/images/r2.jpeg", "/images/r4.jpeg", "/images/r5.jpeg",
    "/images/r6.jpeg", "/images/r7.jpeg", "/images/r8.jpeg", "/images/r9.jpeg",
    "/images/r10.jpeg", "/images/r11.jpeg", "/images/r12.jpeg", "/images/r13.jpeg",
    "/images/r14.jpeg", "/images/r15.jpeg", "/images/r16.jpeg", "/images/r17.jpeg",
    "/images/r18.jpeg", "/images/r19.jpeg", "/images/r20.jpeg", "/images/r21.jpeg",
    "/images/r22.jpeg", "/images/r23.jpeg", "/images/r24.jpeg", "/images/r25.jpeg",
    "/images/r26.jpeg", "/images/r27.jpeg", "/images/r28.jpeg", "/images/r29.jpeg",
    "/images/r30.jpeg", "/images/r31.jpeg", "/images/r32.jpeg", "/images/r33.jpeg"
  ]

  return (
    <div className="relative overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <motion.img
          src="/images/homep.jpeg"
          alt="Galerie"
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
          Nos Réalisations
        </motion.h1>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <PhotoProvider>
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {galleryImages.map((img, index) => (
              <PhotoView key={index} src={img}>
                <motion.div
                  className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }} // delay progressif pour 33 images
                >
                  <motion.img
                    src={img}
                    alt={`Réalisations ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy" // lazy loading
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"
                  />
                </motion.div>
              </PhotoView>
            ))}
          </motion.div>
        </PhotoProvider>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gray-900 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 blur-3xl"></div>
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Transformez votre cuisine dès aujourd'hui
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
            Demander un devis
          </a>
        </motion.div>
      </section>
    </div>
  )
}