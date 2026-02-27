import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import MusicPlayer from "./MusicPlayer"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"

export default function Layout({ children }) {

  const location = useLocation()

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Page Animation */}
      <AnimatePresence mode="wait">

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="flex-1 pt-[80px]"
        >

          {children}

        </motion.main>

      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
      <MusicPlayer />

    </div>
  )
}