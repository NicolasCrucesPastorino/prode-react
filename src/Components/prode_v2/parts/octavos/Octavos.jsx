import React from 'react'
import ConsumerProdeContext from '../../ProdeProvider'
import { equipos } from '../../../../Constantes'

export const Octavos = () => {
    const {octavos} = ConsumerProdeContext()
    const { grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH } = equipos

    const handleOnChangeOctavos = (evento) => {
       // setoctavos({...octavos,[evento.target.name]:evento.target.value})
    }

    return (
        <>
        <section>
            <div className='row mb-4'>
                <div className='col-auto'>
                    <label>1ro Grupo A :</label>
                    <select className='form-control col-3' onChange={handleOnChangeOctavos} name='1-a'>
                        {octavos['1-a'] ?
                            <option value={octavos['1-a']}>{octavos['1-a']}</option> :
                            <option value=''>seleccione un pais</option>}
                        {Object.values(grupoA).map(equipo => <option value={equipo} >{equipo}</option>)}
                    </select>
                </div>
                <div className='col-auto'>
                    <label> 2do Grupo A :</label>
                    <select className={'form-control col-3'} onChange={handleOnChangeOctavos} name='2-a'>
                        {octavos['2-a'] ?
                            <option value={octavos['2-a']}>{octavos['2-a']}</option> :
                            <option value=''>seleccione un pais</option>}
                        {Object.values(grupoA).map(equipo => <option value={equipo}>{equipo}</option>)}
                    </select>
                </div>
            </div>
            
            <label>1ro Grupo B :</label>
            <select onChange={handleOnChangeOctavos} name='1-b'>
                {octavos['1-b']  ?
                    <option value={octavos['1-b']}>{octavos['1-b']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo B :</label>
            <select onChange={handleOnChangeOctavos} name='2-b'>
                {octavos['2-b']  ?
                    <option value={octavos['2-b']}>{octavos['2-b']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo C :</label>
            <select onChange={handleOnChangeOctavos} name='1-c'>
                {octavos['1-c']  ?
                    <option value={octavos['1-c']}>{octavos['1-c']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo C :</label>
            <select onChange={handleOnChangeOctavos} name='2-c'>
                {octavos['2-c']  ?
                    <option value={octavos['2-c']}>{octavos['2-c']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo D :</label>
            <select onChange={handleOnChangeOctavos} name='1-d'>
                {octavos['1-d']  ?
                    <option value={octavos['1-d']}>{octavos['1-d']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo D :</label>
            <select onChange={handleOnChangeOctavos} name='2-d'>
                {octavos['2-d']  ?
                    <option value={octavos['2-d']}>{octavos['2-d']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo E :</label>
            <select onChange={handleOnChangeOctavos} name='1-e'>
                {octavos['1-e']  ?
                    <option value={octavos['1-e']}>{octavos['1-e']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo E :</label>
            <select onChange={handleOnChangeOctavos} name='2-e'>
                {octavos['2-e'] ?
                    <option value={octavos['2-e']}>{octavos['2-e']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo F :</label>
            <select onChange={handleOnChangeOctavos} name='1-f'>
                {octavos['1-f']  ?
                    <option value={octavos['1-f']}>{octavos['1-f']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo F :</label>
            <select onChange={handleOnChangeOctavos} name='2-f'>
                {octavos['2-f']  ?
                    <option value={octavos['2-f']}>{octavos['2-f']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo G :</label>
            <select onChange={handleOnChangeOctavos} name='1-g'>
                {octavos['1-g']  ?
                    <option value={octavos['1-g']}>{octavos['1-g']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo G :</label>
            <select onChange={handleOnChangeOctavos} name='2-g'>
                {octavos['2-g']  ?
                    <option value={octavos['2-g']}>{octavos['2-g']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo H :</label>
            <select onChange={handleOnChangeOctavos} name='1-h'>
                {octavos['1-h']  ?
                    <option value={octavos['1-h']}>{octavos['1-h']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo H :</label>
            <select onChange={handleOnChangeOctavos} name='2-h'>
                {octavos['2-h']  ?
                    <option value={octavos['2-h']}>{octavos['2-h']}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.values(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>

        </section>

       
        </>

        
    )
}
