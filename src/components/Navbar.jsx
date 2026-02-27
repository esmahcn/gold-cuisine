import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const location = useLocation()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 80)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -120 }}
          animate={{ y: 0 }}
          exit={{ y: -120 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full z-50"
        >
          {/* Halo doré animé */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/20 blur-[120px] animate-pulse"></div>
          </div>

          <div
            className={`transition-all duration-500 ${
              scrolled
                ? "bg-white/70 backdrop-blur-2xl shadow-xl border-b border-gray-200"
                : "bg-gradient-to-b from-black/70 to-transparent"
            }`}
          >
            <div
              className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
                scrolled ? "py-3" : "py-6"
              }`}
            >
              {/* LOGO */}
              <Link to="/" className="flex items-center gap-3">
                <motion.img
                  src="/images/logo2.jpeg"
                  alt="Logo"
                  className="w-auto"
                  animate={{
                    height: scrolled ? 34 : 46,
                    filter: scrolled
                      ? "drop-shadow(0 0 6px rgba(234,179,8,0.4))"
                      : "drop-shadow(0 0 12px rgba(234,179,8,0.6))",
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.span
                  animate={{
                    fontSize: scrolled ? "1.4rem" : "1.8rem",
                    color: scrolled ? "#1f2937" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-bold tracking-wide"
                >
                  Gold Cuisine
                </motion.span>
              </Link>

              {/* DESKTOP LINKS */}
              <ul
                className={`hidden md:flex gap-10 font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {links.map((link) => (
                  <li key={link.path} className="relative">
                    <Link
                      to={link.path}
                      className="transition duration-300 hover:text-yellow-500"
                    >
                      {link.name}
                    </Link>

                    {location.pathname === link.path && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-2 w-full h-[2px] bg-yellow-500"
                      />
                    )}
                  </li>
                ))}
              </ul>

              {/* MOBILE BUTTON */}
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="relative w-8 h-8 flex flex-col justify-between"
                >
                  <span
                    className={`h-1 rounded transition-all duration-300 ${
                      menuOpen
                        ? "rotate-45 translate-y-3 bg-yellow-500"
                        : scrolled
                        ? "bg-gray-800"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`h-1 rounded transition-all duration-300 ${
                      menuOpen
                        ? "opacity-0"
                        : scrolled
                        ? "bg-gray-800"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`h-1 rounded transition-all duration-300 ${
                      menuOpen
                        ? "-rotate-45 -translate-y-3 bg-yellow-500"
                        : scrolled
                        ? "bg-gray-800"
                        : "bg-white"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/95 backdrop-blur-2xl shadow-xl"
              >
                <ul className="flex flex-col gap-6 p-6 text-gray-800 font-medium">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-yellow-500 transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}