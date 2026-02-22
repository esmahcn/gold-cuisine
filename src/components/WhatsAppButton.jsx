import { FaWhatsapp } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function WhatsAppButton() {

  const [visible, setVisible] = useState(false)

  const phoneNumber = "213557075875"
  const message = "Bonjour, je veux un devis pour une cuisine."

  // Show after scroll
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])


  if (!visible) return null


  return (

    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div className="
      absolute right-20 top-1/2 -translate-y-1/2
      bg-black text-white text-sm px-4 py-2 rounded-lg
      opacity-0 group-hover:opacity-100
      transition duration-300 whitespace-nowrap">

        Contactez-nous

      </div>


      {/* Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >

        <div className="relative">

          {/* Pulse */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>


          {/* Button */}
          <div className="
          relative
          bg-green-500
          hover:bg-green-600
          text-white
          w-16 h-16
          rounded-full
          flex items-center justify-center
          shadow-xl
          transition
          duration-300
          hover:scale-110
          animate-bounce
          ">

            <FaWhatsapp size={30} />

          </div>

        </div>

      </a>

    </div>

  )

}