import { useState, useEffect } from "react";
import Error from "./Error";




// eslint-disable-next-line react/prop-types
function Form({pacientes,setPacientes,paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=>{
    if (Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setPropietario(paciente.propietario);
      setSintomas(paciente.sintomas);
    };
  },[paciente])

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del Formulario

    if([nombre,propietario,fecha,email,sintomas].includes('')){
      console.log('Existe un campo vacio')
      setError(true);
      return
    }else{



      setError(false)

      //Objeto de Pacientes

      const generarId = () => {
        const fecha = Date.now(36)
        return fecha
      }


      const objetoPaciente = {
        nombre,
        propietario,
        fecha,
        email,
        sintomas,
      }


      if (pacientes.id){
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objetoPaciente :pacienteState )

        setPacientes(pacientesActualizados)
        setPacientes({})

      }else{
        //Nuevo Registro 
        objetoPaciente.id = generarId();
        setPacientes([...pacientes,objetoPaciente]);
      }


      setPacientes([...pacientes, objetoPaciente]);
    }
    
  }






  

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h1 className="font-black text-3xl text-center text-indigo-600">Seguimiento de Pacientes</h1>
      <p className="font-semibold text-center mt-8 mb-10">Añade pacientes y <span className="text-indigo-600"> Administralos</span>
      </p>
      <form className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10"
       onSubmit={handleSubmit}
       
       >
        {error && <Error mensaje='Todos los campos son obligatorios'/> }
        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propieatario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>
            <input 
            id="email"
            type="email"
            placeholder="Correo Electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha</label>
            <input 
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold mb-3">Sintomas</label>
            <textarea 
            id="sintomas"
            placeholder="Colocar los sintoma"
            className="w-full border-2 p-2"
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
            />
        </div>

        <button
         type="submit"
        className=" bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 transition-all"
        value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
        >Enviar Paciente</button>
      </form>

    </div>
  )
}

export default Form;
