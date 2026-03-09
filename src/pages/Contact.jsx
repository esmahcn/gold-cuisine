import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
export default function Contact() {

  const formRef = useRef()
  const [messageStatus, setMessageStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_aydiace",
      "template_bcgsxp8",
      formRef.current,
      "F7Rn7vGrMM09PgSnW"
    )
    .then(() => {
      setMessageStatus("✅ Message envoyé avec succès")
      formRef.current.reset()
    })
    .catch(() => {
      setMessageStatus("❌ Erreur lors de l'envoi")
    })
  }

  return (

    <div>

{/* HERO */}

<section className="bg-gray-900 text-white py-20 text-center">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-4xl md:text-6xl font-bold mb-4"
>

Contactez-nous

</motion.h1>

<p className="text-gray-300">

Nous sommes disponibles pour votre projet cuisine

</p>

</section>


{/* CONTENT */}

<section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


{/* FORM */}

<motion.div
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:1}}
>

<h2 className="text-2xl font-bold mb-6">

Envoyer un message

</h2>

<form
ref={formRef}
onSubmit={handleSubmit}
className="flex flex-col gap-5"
>

<input
name="user_name"
placeholder="Votre nom"
required
className="border p-3 rounded-lg"
/>


<input
name="user_email"
placeholder="Votre email"
required
className="border p-3 rounded-lg"
/>


<textarea
name="message"
placeholder="Votre message"
required
rows="6"
className="border p-3 rounded-lg"
/>


<button
className="bg-yellow-500 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
>

Envoyer

</button>

</form>


<p className="mt-4 font-semibold">

{messageStatus}

</p>

</motion.div>



{/* INFOS */}

<motion.div
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:1}}
>

<h2 className="text-2xl font-bold mb-6">

Informations

</h2>


<div className="space-y-4 text-gray-700">

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
className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg mt-4"
>
WhatsApp
</a>

{/* SOCIAL MEDIA */}

<div className="flex gap-4 mt-6">

<motion.a
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9 }}
href="https://www.instagram.com/cuisine.gold?igsh=MTFsbGVibXZmczV4Yg=="
target="_blank"
rel="noopener noreferrer"
className="bg-gray-100 p-3 rounded-full text-xl hover:bg-pink-500 hover:text-white transition"
>
<FaInstagram />
</motion.a>

<motion.a
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9 }}
href="https://www.facebook.com/profile.php?id=100063522665366"
target="_blank"
rel="noopener noreferrer"
className="bg-gray-100 p-3 rounded-full text-xl hover:bg-blue-600 hover:text-white transition"
>
<FaFacebook />
</motion.a>

<motion.a
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9 }}
href="https://www.tiktok.com/@gold.cuisine?_r=1&_t=ZS-94XkNjKN4Ho"
target="_blank"
rel="noopener noreferrer"
className="bg-gray-100 p-3 rounded-full text-xl hover:bg-black hover:text-white transition"
>
<FaTiktok />
</motion.a>

</div>

</div>

</motion.div>

</section>



{/* MAP */}

<section className="h-[400px]">

<iframe

src="https://maps.google.com/maps?q=Hammadi%20Boumerdes&t=&z=13&ie=UTF8&iwloc=&output=embed"

width="100%"

height="100%"

style={{border:0}}

loading="lazy"

/>

</section>


</div>

)
}