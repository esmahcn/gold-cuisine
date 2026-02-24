import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >

      <div className="text-center">

        {/* Logo */}
        <motion.img
          src="/images/logo.jpeg"
          className="w-32 mx-auto mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.h1
          className="text-white text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Gold Cuisine
        </motion.h1>

        {/* Loading animation */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-yellow-500"
        >
          Chargement...
        </motion.div>

      </div>

    </motion.div>

  )
}