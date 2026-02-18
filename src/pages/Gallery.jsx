import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

// Exemple de photos locales ou URL Instagram
const photos = [
  "/img/cuisine1.jpg",
  "/img/cuisine2.jpg",
  "/img/cuisine3.jpg",
  "/img/cuisine4.jpg",
  "/img/cuisine5.jpg",
  "/img/cuisine6.jpg",
]

export default function Gallery() {
  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Nos Réalisations</h1>
      <p className="text-gray-600 mb-6">
        Découvrez quelques-unes de nos cuisines et décorations.
      </p>

      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <PhotoView key={index} src={photo}>
              <img
                src={photo}
                alt={`Cuisine ${index + 1}`}
                className="rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  )
}
