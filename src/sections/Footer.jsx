function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-16 px-8 transition-colors">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Logo y descripción */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl">🐾</span>
                        <span className="text-xl font-bold text-emerald-400">Patitas Vet</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Cuidamos a tu mascota con amor y profesionalismo. Tu confianza es nuestra mayor recompensa.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-emerald-400">Enlaces</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Inicio</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Servicios</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Nosotros</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Agendar Cita</li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-emerald-400">Contacto</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li>📍 Quito, Ecuador</li>
                        <li>📞 +593 99 123 4567</li>
                        <li>✉️ contacto@patitasvet.com</li>
                        <li>🕐 Lun - Sab: 8am - 8pm</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
                © 2026 Patitas Vet. Hecho con ❤️ para las mascotas de Ecuador.
            </div>
        </footer>
    )
}

export default Footer