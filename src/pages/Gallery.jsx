import { motion } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
import { useState } from "react"

export default function Gallery() {

  // Categories
  const categories = [
    "Tous",
    "Cuisine",
    "Chambre à coucher",
    "Meuble TV",
    "Meuble chaussure",
    "Dressing"
  ]

  const [activeCategory, setActiveCategory] = useState("Tous")

  // Images with categories
  const galleryImages = [

    { src: "/images/r1.jpeg", category: "Cuisine" },
    { src: "/images/r2.jpeg", category: "Cuisine" },
    { src: "/images/r4.jpeg", category: "Cuisine" },
    { src: "/images/r5.jpeg", category: "Cuisine" },

    { src: "/images/r6.jpeg", category: "Chambre à coucher" },
    { src: "/images/r7.jpeg", category: "Chambre à coucher" },

    { src: "/images/r8.jpeg", category: "Meuble TV" },
    { src: "/images/r9.jpeg", category: "Meuble TV" },

    { src: "/images/r10.jpeg", category: "Meuble chaussure" },
    { src: "/images/r11.jpeg", category: "Meuble chaussure" },

    { src: "/images/r12.jpeg", category: "Dressing" },
    { src: "/images/r13.jpeg", category: "Dressing" },

    { src: "/images/r14.jpeg", category: "Cuisine" },
    { src: "/images/r15.jpeg", category: "Cuisine" },
    { src: "/images/r16.jpeg", category: "Cuisine" },
    { src: "/images/r17.jpeg", category: "Cuisine" },
    { src: "/images/r18.jpeg", category: "Cuisine" },

  ]


  // Filter images
  const filteredImages =
    activeCategory === "Tous"
      ? galleryImages
      : galleryImages.filter(
          img => img.category === activeCategory
        )

  return (

    <div className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">

        <motion.img
          src="/images/homep.jpeg"
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative text-5xl font-bold">
          Nos Réalisations
        </h1>

      </section>


      {/* CATEGORIES */}

      <section className="py-10 text-center">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map(cat => (

            <button
              key={cat}

              onClick={() =>
                setActiveCategory(cat)
              }

              className={`px-6 py-2 rounded-full border transition

              ${
                activeCategory === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-white text-gray-700"
              }

              `}
            >

              {cat}

            </button>

          ))}

        </div>

      </section>


      {/* GALLERY */}

      <section className="pb-20 px-6 max-w-6xl mx-auto">

        <PhotoProvider>

          <div className="grid md:grid-cols-3 gap-6">

            {filteredImages.map((img, index) => (

              <PhotoView key={index} src={img.src}>

                <motion.img

                  src={img.src}

                  className="w-full h-64 object-cover rounded-xl cursor-pointer shadow-lg hover:scale-105 transition"

                />

              </PhotoView>

            ))}

          </div>

        </PhotoProvider>

      </section>


    </div>

  )

}