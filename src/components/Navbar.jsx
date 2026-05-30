import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Dashboard' },
    { to: '/fortschritt', label: 'Fortschritt' },
    { to: '/karteikarten', label: 'Karteikarten' },
  ]

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span>⚡</span>
            <span className="hidden sm:block">Automatiker Lern-App</span>
            <span className="sm:hidden">Automatiker</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === l.to
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-100 hover:bg-blue-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden p-2 rounded text-blue-100 hover:bg-blue-700"
            onClick={() => setOpen(o => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-3 space-y-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === l.to
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-100 hover:bg-blue-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
