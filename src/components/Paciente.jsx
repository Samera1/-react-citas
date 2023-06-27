
const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {

    const {nombre,propietario,email,fecha,sintomas, id} = paciente

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 uppercase">Nombre:{" "}
          <span className="font-normal normal-case">
              {nombre}
          </span>
      </p>
      <p className="font-bold mb-3 uppercase">Propietario:{" "}
          <span className="font-normal normal-case">
          {propietario}
          </span>
      </p>
      <p className="font-bold mb-3 uppercase">Email:{" "}
          <span className="font-normal normal-case">
          {email}
          </span>
      </p>
      <p className="font-bold mb-3 uppercase">Fecha Alta:{" "}
          <span className="font-normal normal-case">
          {fecha}
          </span>
      </p>
      <p className="font-bold mb-3 uppercase">Sintomas:{" "}
          <span className="font-normal normal-case">
          {sintomas}
          </span>
      </p>
      <div className="flex justify-between mt-2">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-sm"
          onClick={()=> setPaciente(paciente) }
        >Editar</button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm"
          onClick={()=> eliminarPaciente(id)}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente
