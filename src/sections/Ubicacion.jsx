function Ubicacion() {
    return (
        <section className="py-24 px-8 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    Encuéntranos
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 text-xl mb-12">
                    Visítanos en nuestra clínica veterinaria
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* Mapa */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[700px] md:h-[800px]">
                        <div className="w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273.3503145120631!2d-79.39904989953706!3d0.008662471335356053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fd5551f9838368d%3A0xbd09ea87c451ced7!2sVeterinaria%20%22Patitas%20Vet%22!5e0!3m2!1ses-419!2sec!4v1771467912534!5m2!1ses-419!2sec"
                                className="w-full h-[500px] md:h-[600px] rounded-2xl shadow-lg"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Patitas Vet"
                            ></iframe>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-6">
                        <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">📍</span>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">
                                        Dirección
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Calle Paris, La Concordia, Ecuador.<br />
                                        Cerca de EuropaGYM y Av. Simón Plata Torres.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">📞</span>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">
                                        Teléfono
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        +593 99 123 4567
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">🕐</span>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">
                                        Horario
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Lunes a Sábado: 8:00 AM - 5:30 PM<br />
                                        Domingos: Emergencias o bajo cita previa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/eq9fJKALFUZpSE6K9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-emerald-600 dark:bg-emerald-500 text-white text-center py-4 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all hover:scale-105"
                        >
                            Cómo llegar 🚗
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Ubicacion