/* eslint-disable no-unused-vars */
import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  let citasIniciales=JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales)
  {
    citasIniciales=[];
  }


  const [citas,setCitas]=useState(citasIniciales);

  //Use efect para realziar ciertas opeacioens cuando el state cambia
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  },[citas,citasIniciales])

  //ModificarCitas
  const crearCita=(cita)=>{
    setCitas([
      ...citas,
      cita
    ])
    //console.log(cita)
  }

  const eliminarCita=id=>{
    const nuevasCita=citas.filter(cita=>cita.id!==id);
    setCitas(nuevasCita);
  }

  const titulo=citas.length===0?'No hay citas':'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
          <h2>{titulo}</h2>
            {citas.map(cita=>{
              return(
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
