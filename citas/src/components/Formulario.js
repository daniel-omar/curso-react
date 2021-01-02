/* eslint-disable no-unused-vars */
import React,{Fragment,useState} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'
//const { v4: uuid } = require('uuid');

const Formulario=({crearCita})=>{
    //Crear State de Citas
    const [cita,setCita]=useState(
        {mascota:'',propietario:'',fecha:'',hora:'',sintomas:''}
    )

    const [error,setError]=useState(
        false
    )

    //function
    const actualizarState=(e)=>{
        setCita({
            ...cita,
            [e.target.name]:e.target.value
        });
    }
    const submitCita=(e)=>{
        e.preventDefault();
        
        //Validar
        for (const elemento in cita) {
            if (cita[elemento].trim() === '') {
                setError(true)
                return
            }
        }

        setError(false)

        //Asignar un ID
        //const id=uuidv4();
        //setCita({...cita,id});
        cita.id=uuidv4();

        //Creaar la cita
        crearCita(cita);

        //Reiniciar
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    //extraer valores
    const {mascota,propietario,fecha,hora,sintomas}=cita;

    return(
        <Fragment>
            <h2>Crear Cita</h2>
            {
                error 
                ?
                    <p className="alerta-error">Todos loscampos son obligatorios</p>
                :
                    null
            }
            <form onSubmit={submitCita} autoComplete="off">
                <div className="row">
                    <div className="twelve columns">
                        <label >Nombre mascota</label>
                        <input className="u-full-width" 
                        type="text" 
                        placeholder="Nombre mascota" 
                        id="txtNombreMascota" 
                        name="mascota"
                        value={mascota}
                        onChange={actualizarState}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <label >Nombre dueño</label>
                        <input className="u-full-width" 
                        type="text" 
                        placeholder="Nombre Dueño" 
                        id="txtNombreDueno" 
                        name="propietario"
                        value={propietario}
                        onChange={actualizarState}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label >Fecha alta</label>
                        <input className="u-full-width" 
                        type="date" 
                        id="txtFechaAlta" 
                        name="fecha"
                        value={fecha}
                        onChange={actualizarState}/> 
                    </div>
                    <div className="six columns">
                        <label >Hora alta</label>
                        <input className="u-full-width" 
                        type="time" 
                        id="txtHoraAlta" 
                        name="hora"
                        value={hora}
                        onChange={actualizarState}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <label >Sintomas</label>
                        <textarea className="u-full-width" 
                        rows="3" 
                        name="sintomas" 
                        id="txtSintomas"
                        value={sintomas}
                        onChange={actualizarState}>
                        </textarea>
                    </div>
                </div>
                <button type="submit" className="u-full-width button-primary">
                    Agregar cita
                </button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes={
    crearCita:PropTypes.func
}
/* eslint-enable no-unused-vars */
export default Formulario;