import React from 'react'
import IModalHabitacion from '@/interfaces/interfaceModalHabitacion'

export const FormularioHabitacion = ({handleHabitacionSubmit, handleHabitacionChange, nuevaHabitacion, tituloModal, textoBoton} : IModalHabitacion) => {
    return (
        <form className="max-w-md mx-auto" onSubmit={handleHabitacionSubmit}>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-vlack-900 md:text-2xl dark:text-black mb-4">
                {tituloModal}
            </h1>
            <div className="relative z-0 w-full mb-5 group">
                <input type="number" value={nuevaHabitacion.numero} onChange={handleHabitacionChange} name="numero" id="floating_numero" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_numero" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de habitación</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <select value={nuevaHabitacion.ocupado} name="ocupado" id="floating_ocupado" onChange={handleHabitacionChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="floating_ocupado" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ocupada</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{textoBoton}</button>
        </form>
    )
}