import { motion } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
import { useState, useEffect } from "react"

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
    { src: "/images/homep.jpeg", category: "Cuisine" },
    { src: "/images/r5.jpeg", category: "Cuisine" },
    { src: "/images/r8.jpeg", category: "Cuisine" },
    { src: "/images/r12.jpeg", category: "Cuisine" },
    { src: "/images/r24.jpeg", category: "Cuisine" },
    { src: "/images/r30.jpeg", category: "Cuisine" },
    { src: "/images/r33.jpeg", category: "Cuisine" },
    { src: "/images/r32.jpeg", category: "Cuisine" },

    { src: "/images/p58.jpeg", category: "Cuisine" },
    { src: "/images/p55.jpeg", category: "Cuisine" },
    { src: "/images/p51.jpeg", category: "Cuisine" },
    { src: "/images/p26.jpeg", category: "Cuisine" },

    { src: "/images/r31.jpeg", category: "Chambre à coucher" },
    { src: "/images/r25.jpeg", category: "Chambre à coucher" },
    { src: "/images/r16.jpeg", category: "Chambre à coucher" },
    { src: "/images/r7.jpeg", category: "Chambre à coucher" },
    { src: "/images/r4.jpeg", category: "Chambre à coucher" },
    { src: "/images/p54.jpeg", category: "Chambre à coucher" },
    { src: "/images/p53.jpeg", category: "Chambre à coucher" },
    { src: "/images/p52.jpeg", category: "Chambre à coucher" },
    { src: "/images/p51.jpeg", category: "Chambre à coucher" },
    { src: "/images/p26.jpeg", category: "Chambre à coucher" },
    { src: "/images/p5.jpeg", category: "Chambre à coucher" },
    { src: "/images/p8.jpeg", category: "Chambre à coucher" },
    { src: "/images/p22.jpeg", category: "Chambre à coucher" },
    { src: "/images/p25.jpeg", category: "Chambre à coucher" },
    { src: "/images/p28.jpeg", category: "Chambre à coucher" },
    { src: "/images/p32.jpeg", category: "Chambre à coucher" },
    { src: "/images/p34.jpeg", category: "Chambre à coucher" },
    { src: "/images/p35.jpeg", category: "Chambre à coucher" },
    { src: "/images/p37.jpeg", category: "Chambre à coucher" },
    { src: "/images/p43.jpeg", category: "Chambre à coucher" },
    { src: "/images/p44.jpeg", category: "Chambre à coucher" },
    { src: "/images/p50.jpeg", category: "Chambre à coucher" },

    { src: "/images/r13.jpeg", category: "Meuble TV" },
    { src: "/images/r14.jpeg", category: "Meuble TV" },
    { src: "/images/r26.jpeg", category: "Meuble TV" },
    { src: "/images/p48.jpeg", category: "Meuble TV" },
    { src: "/images/p6.jpeg", category: "Meuble TV" },
    { src: "/images/p27.jpeg", category: "Meuble TV" },

    { src: "/images/p12.jpeg", category: "Meuble chaussure" },
    { src: "/images/p60.jpeg", category: "Meuble chaussure" },
    { src: "/images/p61.jpeg", category: "Meuble chaussure" },
    { src: "/images/p63.jpeg", category: "Meuble chaussure" },
    { src: "/images/p64.jpeg", category: "Meuble chaussure" },

    { src: "/images/r1.jpeg", category: "Dressing" },
    { src: "/images/r2.jpeg", category: "Dressing" },
    { src: "/images/r6.jpeg", category: "Dressing" },
    { src: "/images/r9.jpeg", category: "Dressing" },
    { src: "/images/r10.jpeg", category: "Dressing" },
    { src: "/images/r11.jpeg", category: "Dressing" },
    { src: "/images/r15.jpeg", category: "Dressing" },
    { src: "/images/r17.jpeg", category: "Dressing" },
    { src: "/images/r18.jpeg", category: "Dressing" },
    { src: "/images/r19.jpeg", category: "Dressing" },
    { src: "/images/r20.jpeg", category: "Dressing" },
    { src: "/images/r22.jpeg", category: "Dressing" },
    { src: "/images/p1.jpeg", category: "Dressing" },
    { src: "/images/p2.jpeg", category: "Dressing" },
    { src: "/images/p3.jpeg", category: "Dressing" },
    { src: "/images/p4.jpeg", category: "Dressing" },
    { src: "/images/p9.jpeg", category: "Dressing" },
    { src: "/images/r11.jpeg", category: "Dressing" },
    { src: "/images/p14.jpeg", category: "Dressing" },
    { src: "/images/p16.jpeg", category: "Dressing" },
    { src: "/images/r17.jpeg", category: "Dressing" },
    { src: "/images/p18.jpeg", category: "Dressing" },
    { src: "/images/p19.jpeg", category: "Dressing" },
    { src: "/images/p20.jpeg", category: "Dressing" },
    { src: "/images/p21.jpeg", category: "Dressing" },
    { src: "/images/p30.jpeg", category: "Dressing" },
    { src: "/images/p31.jpeg", category: "Dressing" },
    { src: "/images/p36.jpeg", category: "Dressing" },
    { src: "/images/p39.jpeg", category: "Dressing" },
    { src: "/images/p40.jpeg", category: "Dressing" },
    { src: "/images/p42.jpeg", category: "Dressing" },
    { src: "/images/p45.jpeg", category: "Dressing" },
    { src: "/images/p46.jpeg", category: "Dressing" },
    { src: "/images/p49.jpeg", category: "Dressing" },
    { src: "/images/p56.jpeg", category: "Dressing" },
    { src: "/images/p57.jpeg", category: "Dressing" },
    { src: "/images/p63.jpeg", category: "Dressing" },

    { src: "/images/r23.jpeg", category: "Dressing" },
    { src: "/images/r27.jpeg", category: "Dressing" },
    { src: "/images/r28.jpeg", category: "Dressing" },
    { src: "/images/r29.jpeg", category: "Dressing" },
    { src: "/images/p40.jpeg", category: "Dressing" },
  ]

  // Filter images
  const filteredImages =
    activeCategory === "Tous"
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory)

  // Load Elfsight Instagram Widget
  useEffect(() => {
    const scriptId = "elfsight-instagram-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://apps.elfsight.com/p/platform.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

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
        <h1 className="relative text-5xl font-bold">Nos Réalisations</h1>
      </section>

      {/* CATEGORIES */}
      <section className="py-10 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition
                ${activeCategory === cat ? "bg-yellow-500 text-black" : "bg-white text-gray-700"}
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

      {/* INSTAGRAM FEED */}
      <section className="pb-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Suivez-nous sur Instagram
        </h2>

        <div className="relative w-full overflow-hidden rounded-xl shadow-xl">
          <div class="elfsight-app-03420ed0-38d8-4173-bfec-15662615e97a" data-elfsight-app-lazy></div>
        </div>

        <p className="text-gray-500 mt-4">
          Les dernières publications directement depuis notre compte Instagram.
        </p>
      </section>

    </div>
  )
}