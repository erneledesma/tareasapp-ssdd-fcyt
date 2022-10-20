import { useState } from 'react'

const Formulario = ({ tareas, setTareas }) => {

  const [ nombre, setNombre] = useState('')
  const [ puesto, setPuesto] = useState('')
  const [ fecha, setFecha] = useState('')
  const [ descripcion, setDescripcion] = useState('')

  const [ error, setError ] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion del Formulario
    if( [ nombre, puesto, fecha, descripcion].includes('')) {
      console.log('Hay al menos un campo vacio')

      setError(true)
      
      
    } else {
      setError(false)

      // obejeto de tareas
      const objetoTareas = {
        nombre,
        puesto,
        fecha,
        descripcion,
        id: generarId()
      }

      setTareas([...tareas, objetoTareas])

      // reiniciar el formulario
      setNombre('')
      setPuesto('')
      setFecha('')
      setDescripcion('')

    }
    console.log('Enviando Formulario')
  }
    
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de tareas</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade tareas y {" "} 
          <span className="text-indigo-600 font-bold">Administralas</span>
        </p>

        <form 
          onSubmit={ handleSubmit }
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          { error &&
          
          <div className='bg-red-800 text-white text-center p-3-uppercase font-bold mb-3 rounded-md'>
            <p>Si hay un error </p>
          </div>
          
           }
            <div className="mb-5">
              <label htmlFor="Nombre">Nombre del Dev</label>
              <input
                id="nombre"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                type="text"
                placeholder="Nombre del desarrollador"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}

              />
            </div>  

             <div className="mb-5">
              <label htmlFor="Puesto">Puesto del Dev</label>
              <input
                id="puesto"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                type="text"
                placeholder="Puesto del desarrollador"
                value={puesto}
                onChange={(e) => setPuesto(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta">Alta</label>
              <input
                id="alta"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="detalle">Descripcion de la tarea</label>
              <textarea
                id="detalle"
                className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                placeholder="Describe la tarea"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}

              />
            </div>

            <input
              type="submit"
              className="
              bg-indigo-600 
              w-full 
              p-3 
              text-white 
              uppercase 
              font-bold 
              hover:bg-indigo-700 cursor-pointer transition-colors"
             />
        </form>
      </div>
      );
}
 
export default Formulario;