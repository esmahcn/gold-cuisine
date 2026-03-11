import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import HeroSlider from "../components/HeroSlider"

export default function Home() {
  return (

<div className="relative overflow-hidden">

{/* HERO */}

<section className="relative h-screen overflow-hidden">

<HeroSlider />

<div className="absolute inset-0 bg-black/50 z-10"></div>

<div className="absolute top-[65%] left-1/2 -translate-x-1/2 z-20">

<motion.div
initial={{ opacity:0, y:60 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:1.6 }}
>

<Link
  to="/gallery"
  className="bg-yellow-500 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-400 transition text-sm sm:text-base"
>
  Voir nos réalisations
</Link>

</motion.div>

</div>

</section>


{/* ABOUT */}

<section className="py-24 bg-white">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<motion.div
initial={{opacity:0, x:-60}}
whileInView={{opacity:1, x:0}}
viewport={{once:true}}
transition={{duration:0.8}}
>

<img
src="/images/r12.jpeg"
className="rounded-2xl shadow-xl w-full object-cover"
/>

</motion.div>


<motion.div
initial={{opacity:0, x:60}}
whileInView={{opacity:1, x:0}}
viewport={{once:true}}
transition={{duration:0.8}}
>

<p className="text-yellow-500 font-semibold mb-3">
À propos de nous
</p>

<h2 className="text-4xl font-bold mb-4">
Gold Cuisine
</h2>

<div className="w-16 h-1 bg-yellow-500 mb-6"></div>

<p className="text-gray-600 mb-6 leading-relaxed">

Gold Cuisine est spécialisée dans la fabrication de cuisines modernes,
dressings et meubles sur mesure. Nous combinons design,
qualité et fonctionnalité pour créer des espaces élégants
et parfaitement adaptés à votre maison.

</p>

<ul className="space-y-2 text-gray-700">

<li>✔ Fabrication sur mesure</li>
<li>✔ Matériaux de haute qualité</li>
<li>✔ Design moderne</li>
<li>✔ Installation professionnelle</li>

</ul>

</motion.div>

</div>

</section>


{/* SERVICES */}

<section className="py-24 bg-gray-100">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-16">
Nos Services
</h2>

<div className="grid md:grid-cols-3 gap-10">

<motion.div
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
>

<div className="text-5xl mb-6">🍽️</div>

<h3 className="text-xl font-semibold mb-3">
Cuisine Moderne
</h3>

<p className="text-gray-600">
Conception et fabrication de cuisines modernes sur mesure avec des matériaux premium.
</p>

</motion.div>


<motion.div
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:0.6, delay:0.2}}
className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
>

<div className="text-5xl mb-6">👗</div>

<h3 className="text-xl font-semibold mb-3">
Dressing
</h3>

<p className="text-gray-600">
Dressings élégants et personnalisés pour optimiser votre espace.
</p>

</motion.div>


<motion.div
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:0.6, delay:0.4}}
className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
>

<div className="text-5xl mb-6">📺</div>

<h3 className="text-xl font-semibold mb-3">
Meubles sur mesure
</h3>

<p className="text-gray-600">
Meubles TV, meubles chaussures et chambres modernes adaptés à votre intérieur.
</p>

</motion.div>

</div>

</div>

</section>

{/* GALLERY PREVIEW */}

<section className="py-20 px-6 max-w-6xl mx-auto text-center">

<h2 className="text-3xl font-bold mb-12">
Nos Réalisations
</h2>

<div className="grid md:grid-cols-3 gap-6">

{/* BIG IMAGE */}

<div className="relative md:col-span-2 h-[420px] overflow-hidden rounded-2xl shadow-xl group">

<img
src="/images/p27.jpeg"
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<p className="text-white text-xl font-semibold">
Cuisine Moderne
</p>

</div>

</div>

{/* RIGHT COLUMN */}

<div className="flex flex-col gap-6">

<div className="relative h-[200px] overflow-hidden rounded-2xl shadow-xl group">

<img
src="/images/p26.jpeg"
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<p className="text-white font-semibold">
Dressing
</p>

</div>

</div>

<div className="relative h-[200px] overflow-hidden rounded-2xl shadow-xl group">

<img
src="/images/p22.jpeg"
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<p className="text-white font-semibold">
Meuble TV
</p>

</div>

</div>

</div>

</div>

<Link
to="/gallery"
className="inline-block mt-12 bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition"
>

Voir toute la galerie

</Link>

</section>

{/* WHY CHOOSE US */}

<section className="bg-gray-900 text-white py-16 text-center">

<h2 className="text-3xl font-bold mb-6">
Pourquoi choisir Gold Cuisine ?
</h2>

<p className="text-gray-300 max-w-2xl mx-auto">

✔ Fabrication sur mesure  
✔ Matériaux de haute qualité  
✔ Design moderne  
✔ Installation professionnelle  

</p>

</section>


{/* CTA */}

<section className="py-16 text-center">

<h2 className="text-3xl font-bold mb-6">
Prêt à transformer votre cuisine ?
</h2>

<Link
to="/contact"
className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition"
>

Demander un devis

</Link>

</section>

</div>

)
}