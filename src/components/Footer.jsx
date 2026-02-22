import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Gold Cuisine
          </h2>
          <p className="text-gray-400 text-sm">
            Spécialiste des cuisines modernes et mobilier sur mesure en Algérie.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <FaWhatsapp className="text-yellow-500" />
            <span>0557 07 58 75</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <FaEnvelope className="text-yellow-500" />
            <span>goldcuisine11@gmail.com</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span>Lotissement 11N22 centre Hammadi Boumerdes</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500 transition">About</a></li>
            <li><a href="/gallery" className="hover:text-yellow-500 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gold Cuisine – Tous droits réservés
      </div>
    </footer>
  )
}