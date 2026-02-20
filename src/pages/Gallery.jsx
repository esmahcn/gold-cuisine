import { motion } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

export default function Gallery() {
  const galleryImages = [
    "/images/realisation1.jpg",
    "/images/realisation2.jpg",
    "/images/realisation3.jpg",
    "/images/realisation4.jpg",
    "/images/realisation5.jpg",
    "/images/realisation6.jpg",
  ]

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Nos Réalisations
      </motion.h1>

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
              <motion.img
                src={img}
                alt={`Réalisations ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </PhotoView>
          ))}
        </motion.div>
      </PhotoProvider>
    </section>
  )
}
