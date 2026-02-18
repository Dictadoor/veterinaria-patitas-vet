function Hero() {
    return (
        <section id="inicio" className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 flex items-center px-8 pt-20 transition-colors">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-8">

                {/* Texto izquierda */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                        Cuidamos a tu <span className="text-emerald-600 dark:text-emerald-400">mascota</span> como si fuera nuestra
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-500 dark:text-gray-300">
                        En Patitas Vet brindamos atención veterinaria con amor, experiencia y la tecnología más moderna.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row gap-4">
                        <button className="bg-emerald-600 dark:bg-emerald-500 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all hover:scale-105">
                            Agendar Cita 🐾
                        </button>
                        <button className="border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 dark:hover:bg-gray-700 transition-all">
                            Ver Servicios
                        </button>
                    </div>
                </div>

                {/* Emoji mascota derecha */}
                <div className="text-[150px] md:text-[200px] animate-bounce">
                    🐶
                </div>

            </div>
        </section>
    )
}

export default Hero