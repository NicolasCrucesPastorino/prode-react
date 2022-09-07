import React from 'react'

export const Octavos = (props) => {

    const octavos = props.octavos
    const setoctavos = props.setoctavos

    const handleOnChangeOctavos = (evento) => {
        const octavosauxiliar={...octavos}
    switch (evento.target.name){
      case '1-a': octavosauxiliar.a.a=evento.target.value; break ;
      case '2-a': octavosauxiliar.a.b=evento.target.value; break ;
      case '1-b': octavosauxiliar.b.a=evento.target.value; break ;
      case '2-b': octavosauxiliar.b.b=evento.target.value; break ;
      case '1-c': octavosauxiliar.c.a=evento.target.value; break ;
      case '2-c': octavosauxiliar.c.b=evento.target.value; break ;
      case '1-d': octavosauxiliar.d.a=evento.target.value; break ;
      case '2-d': octavosauxiliar.d.b=evento.target.value; break ;
      case '1-e': octavosauxiliar.e.a=evento.target.value; break ;
      case '2-e': octavosauxiliar.e.b=evento.target.value; break ;
      case '1-f': octavosauxiliar.f.a=evento.target.value; break ;
      case '2-f': octavosauxiliar.f.b=evento.target.value; break ;
      case '1-g': octavosauxiliar.g.a=evento.target.value; break ;
      case '2-g': octavosauxiliar.g.b=evento.target.value; break ;
      case '1-h': octavosauxiliar.h.a=evento.target.value; break ;
      case '2-h': octavosauxiliar.h.b=evento.target.value; break ;
    }
    setoctavos(octavosauxiliar)
    }

    return (
        <section>
            <label>1ro Grupo A :</label>
            <select onChange={handleOnChangeOctavos} name='1-a'>
                {octavos.a.a != '' ?
                    <option value={octavos.a.a}>{octavos.a.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoA).map(equipo => <option value={equipo} >{equipo}</option>)}
            </select>
            <label> 2do Grupo A :</label>
            <select onChange={handleOnChangeOctavos} name='2-a'>
                {octavos.a.b != '' ?
                    <option value={octavos.a.b}>{octavos.a.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoA).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo B :</label>
            <select onChange={handleOnChangeOctavos} name='1-b'>
                {octavos.b.a != '' ?
                    <option value={octavos.b.a}>{octavos.b.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo B :</label>
            <select onChange={handleOnChangeOctavos} name='2-b'>
                {octavos.b.b != '' ?
                    <option value={octavos.b.b}>{octavos.b.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo C :</label>
            <select onChange={handleOnChangeOctavos} name='1-c'>
                {octavos.c.a != '' ?
                    <option value={octavos.c.a}>{octavos.c.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo C :</label>
            <select onChange={handleOnChangeOctavos} name='2-c'>
                {octavos.c.b != '' ?
                    <option value={octavos.c.b}>{octavos.c.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo D :</label>
            <select onChange={handleOnChangeOctavos} name='1-d'>
                {octavos.d.a != '' ?
                    <option value={octavos.d.a}>{octavos.d.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo D :</label>
            <select onChange={handleOnChangeOctavos} name='2-d'>
                {octavos.d.b != '' ?
                    <option value={octavos.d.b}>{octavos.d.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo E :</label>
            <select onChange={handleOnChangeOctavos} name='1-e'>
                {octavos.e.a != '' ?
                    <option value={octavos.e.a}>{octavos.e.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo E :</label>
            <select onChange={handleOnChangeOctavos} name='2-e'>
                {octavos.e.b != '' ?
                    <option value={octavos.e.b}>{octavos.e.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo F :</label>
            <select onChange={handleOnChangeOctavos} name='1-f'>
                {octavos.f.a != '' ?
                    <option value={octavos.f.a}>{octavos.f.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo F :</label>
            <select onChange={handleOnChangeOctavos} name='2-f'>
                {octavos.f.b != '' ?
                    <option value={octavos.f.b}>{octavos.f.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo G :</label>
            <select onChange={handleOnChangeOctavos} name='1-g'>
                {octavos.g.a != '' ?
                    <option value={octavos.g.a}>{octavos.g.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo G :</label>
            <select onChange={handleOnChangeOctavos} name='2-g'>
                {octavos.g.b != '' ?
                    <option value={octavos.g.b}>{octavos.g.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>
            <label>1ro Grupo H :</label>
            <select onChange={handleOnChangeOctavos} name='1-h'>
                {octavos.h.a != '' ?
                    <option value={octavos.h.a}>{octavos.h.a}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <label> 2do Grupo H :</label>
            <select onChange={handleOnChangeOctavos} name='2-h'>
                {octavos.h.b != '' ?
                    <option value={octavos.h.b}>{octavos.h.b}</option> :
                    <option value=''>seleccione un pais</option>}
                {Object.keys(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
            </select>
            <br></br>
            <br></br>

        </section>
    )
}
