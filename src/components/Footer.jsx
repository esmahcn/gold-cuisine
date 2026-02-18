export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mb-2 font-semibold text-yellow-500">
          Gold Cuisine
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Gold Cuisine – Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
