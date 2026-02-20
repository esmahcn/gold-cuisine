import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src="public/images/logo.jpeg"
            alt="Gold Cuisine Logo"
            className="h-10 w-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Gold Cuisine
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul
          className={`hidden md:flex gap-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {links.map((link) => (
            <li key={link.path} className="relative">
              <Link
                to={link.path}
                className={`transition-colors duration-300 hover:text-yellow-500 ${
                  location.pathname === link.path
                    ? "text-yellow-500 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>

              {/* Animated underline */}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-500"
                />
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <span
              className={`block h-1 w-full rounded transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-3 bg-yellow-500"
                  : scrolled
                  ? "bg-gray-800"
                  : "bg-white"
              }`}
            />
            <span
              className={`block h-1 w-full rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : scrolled ? "bg-gray-800" : "bg-white"
              }`}
            />
            <span
              className={`block h-1 w-full rounded transition-all duration-300 ${
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col gap-6 p-6 text-gray-800 font-medium">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block transition-colors duration-300 hover:text-yellow-500 ${
                      location.pathname === link.path
                        ? "text-yellow-500 font-semibold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}