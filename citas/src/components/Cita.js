import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const Cita=({cita,eliminarCita})=>{

    /*eslint-disable no-unused-vars*/
    const {id,mascota,propietario,fecha,hora,sintomas} =cita;
    /*eslint-enable no-unused-vars*/

    return(
        <Fragment>
            <div className="cita">
                <p>Mascota: <span>{mascota}</span></p>
                <p>Dueño: <span>{propietario}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
                <p>Sintomas: <span>{sintomas}</span></p>

                <button className="u-full-width button eliminar"
                onClick={()=>eliminarCita(id)}>
                    Eliminar
                </button>

            </div>
        </Fragment>
    );
}

Cita.propTypes={
    cita:PropTypes.object,
    eliminarCita:PropTypes.func
}

export default Cita;