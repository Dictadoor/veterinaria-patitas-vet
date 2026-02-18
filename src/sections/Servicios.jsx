const servicios = [
    { emoji: "💉", titulo: "Vacunación", desc: "Mantenemos a tu mascota protegida con el calendario de vacunas completo." },
    { emoji: "🔬", titulo: "Diagnóstico", desc: "Laboratorio clínico con resultados rápidos y precisos." },
    { emoji: "🏥", titulo: "Cirugía", desc: "Procedimientos quirúrgicos con equipos modernos y seguros." },
    { emoji: "🛁", titulo: "Estética", desc: "Baño, corte y arreglo para que tu mascota luzca hermosa." },
    { emoji: "🦷", titulo: "Odontología", desc: "Limpieza dental y tratamientos para una sonrisa sana." },
    { emoji: "🚑", titulo: "Emergencias", desc: "Atención de urgencias las 24 horas del día." },
]

function Servicios() {
    return (
        <section id="servicios" className="py-24 px-8 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    Nuestros Servicios
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 text-xl mb-16">
                    Todo lo que tu mascota necesita en un solo lugar
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <span className="text-5xl">{servicio.emoji}</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-4 mb-2">{servicio.titulo}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{servicio.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Servicios