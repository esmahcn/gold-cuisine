import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef()
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_aydiace",      // Service ID
        "template_bcgsxp8",     // Template ID
        formRef.current,
        "F7Rn7vGrMM09PgSnW"     // User ID / Public Key
      )
     .then(
  (result) => {
    console.log(result.text)
    setSuccessMessage("Votre message a été envoyé avec succès !")
    formRef.current.reset()
  },
  (error) => {
    console.log("ERROR:", error)
    setSuccessMessage("Une erreur est survenue.")
  }
)
  }

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contactez-nous
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Remplissez le formulaire ou contactez-nous directement par téléphone ou email pour un devis personnalisé.
      </motion.p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          rows="6"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Envoyer
        </button>
      </form>

      {successMessage && (
        <p className="text-center mt-6 text-green-500 font-semibold">{successMessage}</p>
      )}

      <div className="mt-12 text-center text-gray-700">
        <p>Téléphone / WhatsApp : 0557 07 58 75</p>
        <p>Email : goldcuisine11@gmail.com</p>
        <p>Adresse : Lotissement 11N22 centre Hammadi Boumerdes</p>
      </div>
    </section>
  )
}