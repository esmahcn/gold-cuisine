import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* COMPANY */}
        <div>

          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Gold Cuisine
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Fabrication de cuisines modernes et mobilier sur mesure.
            Nous créons des espaces élégants et fonctionnels adaptés
            à votre style.
          </p>

        </div>



        {/* NAVIGATION */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Navigation
          </h3>

          <ul className="space-y-2">

            <li>
              <Link
                to="/"
                className="hover:text-yellow-500 transition"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-yellow-500 transition"
              >
                À propos
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className="hover:text-yellow-500 transition"
              >
                Galerie
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-500 transition"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>



        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>
              📍 Lotissement 11N22 centre Hammadi Boumerdes
            </p>

            <p>
              📧 goldcuisine11@gmail.com
            </p>

            <p>
              📱 0557 07 58 75
            </p>


            <a
              href="https://wa.me/213557075875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-green-500 px-5 py-2 rounded-lg text-white hover:bg-green-600 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>


      </div>



      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} Gold Cuisine

        <br />

        Tous droits réservés

      </div>

    </footer>
  )
}