import { useState } from 'react'

function Citas() {
    const [form, setForm] = useState({
        nombre: '',
        mascota: '',
        servicio: '',
        fecha: '',
        mensaje: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`¡Cita agendada para ${form.mascota}! Te contactaremos pronto 🐾`)
    }

    return (
        <section id="contacto" className="py-24 px-8 bg-emerald-50 dark:bg-gray-800 transition-colors">
            <div className="max-w-2xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    Agenda tu Cita
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 text-xl mb-12">
                    Reserva en minutos, sin llamadas ni esperas
                </p>

                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-lg flex flex-col gap-6">

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="text-gray-600 dark:text-gray-300 font-medium mb-2 block">Tu nombre</label>
                            <input
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Carlos García"
                                className="w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600 dark:text-gray-300 font-medium mb-2 block">Nombre de tu mascota</label>
                            <input
                                name="mascota"
                                value={form.mascota}
                                onChange={handleChange}
                                placeholder="Firulais"
                                className="w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="text-gray-600 dark:text-gray-300 font-medium mb-2 block">Servicio</label>
                            <select
                                name="servicio"
                                value={form.servicio}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition-colors"
                            >
                                <option value="">Selecciona un servicio</option>
                                <option>Vacunación</option>
                                <option>Diagnóstico</option>
                                <option>Cirugía</option>
                                <option>Estética</option>
                                <option>Odontología</option>
                                <option>Emergencias</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600 dark:text-gray-300 font-medium mb-2 block">Fecha preferida</label>
                            <input
                                type="date"
                                name="fecha"
                                value={form.fecha}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-600 dark:text-gray-300 font-medium mb-2 block">Mensaje adicional</label>
                        <textarea
                            name="mensaje"
                            value={form.mensaje}
                            onChange={handleChange}
                            placeholder="Cuéntanos más sobre tu mascota..."
                            rows={4}
                            className="w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-emerald-600 dark:bg-emerald-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all hover:scale-105"
                    >
                        Agendar Cita 🐾
                    </button>

                </form>
            </div>
        </section>
    )
}

export default Citas