export default function Contact() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-4">
        Pour toute demande ou devis, contactez Gold Cuisine :
      </p>

      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nom" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <textarea placeholder="Message" className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
          Envoyer
        </button>
      </form>
    </section>
  )
}
