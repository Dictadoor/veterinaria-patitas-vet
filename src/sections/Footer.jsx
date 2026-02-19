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

                {/* Redes Sociales */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-emerald-400">Síguenos</h4>
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            <span className="text-2xl">📘</span>
                            <span>Facebook</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            <span className="text-2xl">📷</span>
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://wa.me/593991234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            <span className="text-2xl">💬</span>
                            <span>WhatsApp</span>
                        </a>
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            <span className="text-2xl">🎵</span>
                            <span>TikTok</span>
                        </a>
                    </div>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-emerald-400">Contacto</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="flex items-center gap-2">
                            <span>📍</span>
                            <span>La Concordia, Ecuador</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>📞</span>
                            <span>+593 99 123 4567</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>✉️</span>
                            <span>contacto@patitasvet.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>🕐</span>
                            <span>Lun - Sab: 8am - 5:30pm</span>
                        </li>
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