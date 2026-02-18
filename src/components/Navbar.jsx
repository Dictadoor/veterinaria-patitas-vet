import { useState } from 'react'

function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-6 md:px-8 py-4 transition-colors">
            <div className="flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
                    <span className="text-3xl">🐾</span>
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Patitas Vet</span>
                </div>

                {/* Toggle dark mode y hamburguesa */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-2xl"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-3xl text-emerald-600 dark:text-emerald-400"
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Links desktop */}
                <ul className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300 font-medium">
                    <li onClick={() => scrollToSection('inicio')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                        Inicio
                    </li>
                    <li onClick={() => scrollToSection('servicios')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                        Servicios
                    </li>
                    <li onClick={() => scrollToSection('nosotros')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                        Nosotros
                    </li>
                    <li onClick={() => scrollToSection('contacto')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                        Contacto
                    </li>
                </ul>

                {/* Botón desktop */}
                <button
                    onClick={() => scrollToSection('contacto')}
                    className="hidden md:block bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
                >
                    Agendar Cita
                </button>

            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-gray-600 dark:text-gray-300 font-medium">
                    <div onClick={() => scrollToSection('inicio')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                        Inicio
                    </div>
                    <div onClick={() => scrollToSection('servicios')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                        Servicios
                    </div>
                    <div onClick={() => scrollToSection('nosotros')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                        Nosotros
                    </div>
                    <div onClick={() => scrollToSection('contacto')} className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                        Contacto
                    </div>
                    <button
                        onClick={() => scrollToSection('contacto')}
                        className="bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors w-full"
                    >
                        Agendar Cita
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar