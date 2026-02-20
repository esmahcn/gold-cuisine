import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 pt-[80px]">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Gold Cuisine. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
