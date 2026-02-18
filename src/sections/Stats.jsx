const stats = [
    { numero: "10+", label: "Años de experiencia" },
    { numero: "5,000+", label: "Mascotas atendidas" },
    { numero: "98%", label: "Clientes satisfechos" },
    { numero: "24/7", label: "Atención de emergencias" },
]

function Stats() {
    return (
        <section className="bg-emerald-600 dark:bg-emerald-700 py-20 px-8 transition-colors">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center text-white">
                        <p className="text-4xl md:text-6xl font-bold">{stat.numero}</p>
                        <p className="text-emerald-100 text-sm md:text-lg mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats