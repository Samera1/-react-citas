
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">Pacientes</h2>
            <p className="text-indigo-600 font-bold text-xl mt-5 mb-10 text-center">Admnistra tus pacientes y citas</p>

            {pacientes.map( (paciente) => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente} 
                  setPaciente={setPaciente}
                  eliminarPaciente ={eliminarPaciente}
                />
            ))}
        </>
      ) : (
        <>
        <h2 className="font-black text-3xl text-center ">Agrega tus pacientes</h2>
            <p className="text-indigo-600 font-bold text-xl mt-5 mb-10 text-center">Tus pacientes apareceran aqui</p>
        
        
        
        
        
        </>



      )}
 </div>
  )
}

export default ListadoPacientes;
