const equipo = [
    {
        nombre: "Dra. María González",
        especialidad: "Veterinaria General",
        emoji: "👩‍⚕️",
        descripcion: "10 años de experiencia cuidando mascotas con dedicación"
    },
    {
        nombre: "Dr. Carlos Méndez",
        especialidad: "Cirugía Veterinaria",
        emoji: "👨‍⚕️",
        descripcion: "Especialista en procedimientos quirúrgicos complejos"
    },
    {
        nombre: "Dra. Ana Torres",
        especialidad: "Dermatología Animal",
        emoji: "👩‍⚕️",
        descripcion: "Experta en cuidado de piel y pelaje de mascotas"
    },
]

function Nosotros() {
    return (
        <section id="nosotros" className="py-24 px-8 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    Sobre Nosotros
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 text-xl mb-16 max-w-3xl mx-auto">
                    Somos un equipo apasionado por el bienestar animal, comprometidos con brindar
                    atención de calidad con calidez humana y tecnología de punta.
                </p>

                {/* Historia */}
                <div className="bg-emerald-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                        <span className="text-4xl">🏥</span>
                        Nuestra Historia
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                        Patitas Vet nació en 2015 del sueño de crear un espacio donde cada mascota
                        reciba atención personalizada y amorosa. Lo que comenzó como una pequeña clínica
                        familiar, hoy es un centro veterinario de referencia en la zona.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        Nos enorgullece haber atendido a más de 5,000 mascotas y ser parte de la familia
                        de cientos de dueños que confían en nosotros para el cuidado de sus compañeros más queridos.
                    </p>
                </div>

                {/* Equipo */}
                <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    Nuestro Equipo
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {equipo.map((miembro, index) => (
                        <div
                            key={index}
                            className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="text-7xl mb-4">{miembro.emoji}</div>
                            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {miembro.nombre}
                            </h4>
                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                                {miembro.especialidad}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                {miembro.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Valores */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6">
                        <div className="text-5xl mb-3">❤️</div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Amor</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                            Tratamos a cada mascota como si fuera nuestra
                        </p>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-5xl mb-3">🔬</div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Excelencia</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                            Tecnología y conocimiento de vanguardia
                        </p>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-5xl mb-3">🤝</div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Confianza</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                            Tu tranquilidad es nuestra prioridad
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Nosotros