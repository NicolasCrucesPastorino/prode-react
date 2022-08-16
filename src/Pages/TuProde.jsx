import React,{useState} from 'react'
import { Grupo } from '../Components/prode/Grupo'
import { equipos } from '../Constantes'
import '../Constantes'
import { useEffect } from 'react'
import { useFirestore } from '../Hooks/useFirestore'
import resultadosconsumer from '../Hooks/useResultados'
import { BracketTorneo } from '../Components/BracketTorneo'

export const TuProde = () => {
  const [resultados, setresultados] = useState([])
  const [inputbracket, setinputbracket] = useState({})

  const rc=resultadosconsumer();
  
  const firestore=useFirestore()

  const handleOnSubmit= (evento) => {
    evento.preventDefault()
    
    if(inputbracket['1-a'] === inputbracket['2-a'] || inputbracket['1-b'] === inputbracket['2-b'] || inputbracket['1-c'] === inputbracket['2-c'] || inputbracket['1-d'] === inputbracket['2-d'] || inputbracket['1-e'] === inputbracket['2-e'] || inputbracket['1-f'] === inputbracket['2-f'] || inputbracket['1-g'] === inputbracket['2-g'] || inputbracket['1-h'] === inputbracket['2-h']){
      alert('No pueden haber dos equipos iguales')
    } else if(inputbracket['1-a'] === '' || inputbracket['2-a'] === '' || inputbracket['1-b'] === '' || inputbracket['2-b'] === '' || inputbracket['1-c'] === '' || inputbracket['2-c'] === '' || inputbracket['1-d'] === '' || inputbracket['2-d'] === '' || inputbracket['1-e'] === '' || inputbracket['2-e'] === '' || inputbracket['1-f'] === '' || inputbracket['2-f'] === '' || inputbracket['1-g'] === '' || inputbracket['2-g'] === '' || inputbracket['1-h'] === '' || inputbracket['2-h'] === ''){
      alert('debe completar todos los casilleros')
    }else {firestore.createResultados(resultados,1).then(()=>{
      alert('Prode guardado con éxito')
    })
    .catch(error => {
      alert('No se pudo guardar el partido intente mas tarde')
    }) }

    
  }
  const handleOnChangeBracket = (evento) => {
    setinputbracket({...inputbracket,[evento.target.name]: evento.target.value})
    
  }

  const handleOnSubmitBrackets = (evento) => {
    evento.preventDefault()
    
   
    
  }
  

  const {grupoA}=equipos
  const {grupoB}=equipos
  const {grupoC}=equipos
  const {grupoD}=equipos
  const {grupoE}=equipos
  const {grupoF}=equipos
  const {grupoG}=equipos
  const {grupoH}=equipos

  

  useEffect(()=>{
    console.log(resultados)
    console.log('useresultados', rc.resultados)
  },[resultados])

    const grupos=[
      {nombre:'A',partidos:[{equipoA:grupoA.SENEGAL,equipoB:grupoA.PAISES_BAJOS},{equipoA:grupoA.CATAR,equipoB:grupoA.ECUADOR},{equipoA:grupoA.CATAR,equipoB:grupoA.SENEGAL},{equipoA:grupoA.PAISES_BAJOS,equipoB:grupoA.ECUADOR},{equipoA:grupoA.ECUADOR,equipoB:grupoA.SENEGAL},{equipoA:grupoA.PAISES_BAJOS,equipoB:grupoA.CATAR}]} ,
      {nombre:'B',partidos:[{equipoA:grupoB.INGLATERRA,equipoB:grupoB.IRAN},{equipoA:grupoB.ESTADOS_UNIDOS,equipoB:grupoB.GALES},{equipoA:grupoB.GALES,equipoB:grupoB.IRAN},{equipoA:grupoB.INGLATERRA,equipoB:grupoB.ESTADOS_UNIDOS },{equipoA:grupoB.GALES,equipoB:grupoB.INGLATERRA},{equipoA:grupoB.IRAN,equipoB:grupoB.ESTADOS_UNIDOS}] },
      {nombre:'C',partidos:[{equipoA:grupoC.ARGENTINA,equipoB:grupoC.ARABIA_SAUDITA},{equipoA:grupoC.MEXICO,equipoB:grupoC.POLONIA},{equipoA:grupoC.POLONIA,equipoB:grupoC.ARABIA_SAUDITA},{equipoA:grupoC.ARGENTINA,equipoB:grupoC.MEXICO},{equipoA:grupoC.POLONIA,equipoB:grupoC.ARGENTINA},{equipoA:grupoC.ARABIA_SAUDITA,equipoB:grupoC.MEXICO}]},
      {nombre:'D',partidos:[{equipoA:grupoD.DINAMARCA,equipoB:grupoD.TUNEZ},{equipoA:grupoD.FRANCIA,equipoB:grupoD.AUSTRALIA},{equipoA:grupoD.TUNEZ,equipoB:grupoD.AUSTRALIA},{equipoA:grupoD.FRANCIA,equipoB:grupoD.DINAMARCA},{equipoA:grupoD.AUSTRALIA,equipoB:grupoD.DINAMARCA},{equipoA:grupoD.TUNEZ,equipoB:grupoD.FRANCIA}]},
      {nombre:'E',partidos:[{equipoA:grupoE.ALEMANIA,equipoB:grupoE.JAPON},{equipoA:grupoE.ESPANIA,equipoB:grupoE.COSTA_RICA},{equipoA:grupoE.JAPON,equipoB:grupoE.COSTA_RICA},{equipoA:grupoE.ESPANIA,equipoB:grupoE.ALEMANIA},{equipoA:grupoE.JAPON,equipoB:grupoE.ESPANIA},{equipoA:grupoE.COSTA_RICA,equipoB:grupoE.ALEMANIA}]},
      {nombre:'F',partidos:[{equipoA:grupoF.MARRUECOS,equipoB:grupoF.CROACIA},{equipoA:grupoF.BELGICA,equipoB:grupoF.CANADA},{equipoA:grupoF.BELGICA,equipoB:grupoF.MARRUECOS},{equipoA:grupoF.CROACIA,equipoB:grupoF.CANADA},{equipoA:grupoF.CROACIA,equipoB:grupoF.BELGICA},{equipoA:grupoF.CANADA,equipoB:grupoF.MARRUECOS}]},
      {nombre:'G',partidos:[{equipoA:grupoG.SUIZA,equipoB:grupoG.CAMERUN},{equipoA:grupoG.BRASIL,equipoB:grupoG.SERBIA},{equipoA:grupoG.CAMERUN,equipoB:grupoG.SERBIA},{equipoA:grupoG.BRASIL,equipoB:grupoG.SUIZA},{equipoA:grupoG.SERBIA,equipoB:grupoG.SUIZA},{equipoA:grupoG.CAMERUN,equipoB:grupoG.BRASIL}]},
      {nombre:'H',partidos:[{equipoA:grupoH.URUGUAY,equipoB:grupoH.COREA_DEL_SUR},{equipoA:grupoH.PORTUGAL,equipoB:grupoH.GHANA},{equipoA:grupoH.COREA_DEL_SUR,equipoB:grupoH.GHANA},{equipoA:grupoH.PORTUGAL,equipoB:grupoH.URUGUAY},{equipoA:grupoH.GHANA,equipoB:grupoH.URUGUAY},{equipoA:grupoH.COREA_DEL_SUR,equipoB:grupoH.PORTUGAL}]}
    ]

  return (
    <div>
      <h1>Tu Prode</h1>
      <p>Para grabar los datos de TU PRODE apriete el botón de guardar al final.</p>
      <form onSubmit={handleOnSubmit}>
        <div className='container row mx-auto'>
        {grupos.map(grupo => <Grupo resultados={resultados} setresultados={setresultados} nombre={grupo.nombre} partidos={grupo.partidos} ></Grupo>)}
        </div>
        
    

    
    <div>
          <label>1ro Grupo A :</label>
          <select onChange={handleOnChangeBracket} name='1-a'>
            <option value=''>seleccione un pais</option>
            {Object.keys(grupoA).map(equipo => <option value={equipo} >{equipo}</option>)}
          </select>
          <label> 2do Grupo A :</label>
          <select onChange={handleOnChangeBracket} name='2-a'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoA).map(equipo => <option value={equipo}>{equipo}</option>)}            
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo B :</label>
          <select onChange={handleOnChangeBracket} name='1-b'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo B :</label>
          <select onChange={handleOnChangeBracket} name='2-b'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo C :</label>
          <select onChange={handleOnChangeBracket} name='1-c'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo C :</label>
          <select onChange={handleOnChangeBracket} name='2-c'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo D :</label>
          <select onChange={handleOnChangeBracket} name='1-d'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo D :</label>
          <select onChange={handleOnChangeBracket} name='2-d'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo E :</label>
          <select onChange={handleOnChangeBracket} name='1-e'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo E :</label>
          <select onChange={handleOnChangeBracket} name='2-e'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo F :</label>
          <select onChange={handleOnChangeBracket} name='1-f'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo F :</label>
          <select onChange={handleOnChangeBracket} name='2-f'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo G :</label>
          <select onChange={handleOnChangeBracket} name='1-g'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo G :</label>
          <select onChange={handleOnChangeBracket} name='2-g'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo H :</label>
          <select onChange={handleOnChangeBracket} name='1-h'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo H :</label>
          <select onChange={handleOnChangeBracket} name='2-h'>
          <option value=''>seleccione un pais</option>
            {Object.keys(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          
        </div>
    
    <div>
      <BracketTorneo inputbracket={inputbracket}></BracketTorneo>
    </div>
    <button className='btn btn-primary' type='submit'>Guardar</button>
    </form>
    </div>
  )
}
