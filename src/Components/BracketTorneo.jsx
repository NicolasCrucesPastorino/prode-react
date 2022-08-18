import React, { useState } from 'react'
import './Bracket.scss'

export const BracketTorneo = (props) => {
    const [semi, setsemi] = useState({})
    const [final, setfinal] = useState({})
    const [finalista, setfinalista] = useState({})
    const [tercer_lugar, settercer_lugar] = useState({})
    const [campeon, setcampeon] = useState({})

    const torneo=props.torneo
    const settorneo=props.settorneo

    const handleOnChangeCuartos=(evento)=>{
        setsemi({...semi,[evento.target.name]:evento.target.value})
        console.log('valor',evento.target.value)
        console.log(('selector', evento.target.name))
        console.log(semi,'semi')

        if(evento.target.name==='4-a-1'){
            
            settorneo({...torneo,cuartosprimerpartidoequipoa:evento.target.value})
            console.log('torneo1',torneo)
        }
        if(evento.target.name==='4-a-2'){
            
            settorneo({...torneo,cuartosprimerpartidoequipob:evento.target.value})
            console.log('torneo',torneo) 
         }
    }

    const handleOnChangeSemi=(evento)=>{
        setfinal({...final,[evento.target.name]:evento.target.value})
        console.log('final',final)
       
    }
    const handleOnChangeFinal=(evento)=>{
         setcampeon({...campeon,[evento.target.name]:evento.target.value})

    }

    const inputbracket = props.inputbracket
    console.log('props', inputbracket)

   


    return (
        <div className="bracket">

            <section className="round of16">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{inputbracket['1-a']}</span></div>
                                <div className="participant"><span>{inputbracket['2-b']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{inputbracket['1-c']}</span></div>
                                <div className="participant"><span>{inputbracket['2-d']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{inputbracket['1-e']}</span></div>
                                <div className="participant"><span>{inputbracket['2-f']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{inputbracket['1-g']}</span></div>
                                <div className="participant"><span>{inputbracket['2-h']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className='winners'>
                    <div className='matchups'>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{inputbracket['1-b']}</span></div>
                                <div className='participant'><span>{inputbracket['2-a']}</span></div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{inputbracket['1-d']}</span></div>
                                <div className='participant'><span>{inputbracket['2-c']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='connector'>
                        <div className='merger'></div>
                        <div className='line'></div>
                    </div>
                </div>
                <div className='winners'>
                    <div className='matchups'>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{inputbracket['1-f']}</span></div>
                                <div className='participant'><span>{inputbracket['2-e']}</span></div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{inputbracket['1-h']}</span></div>
                                <div className='participant'><span>{inputbracket['2-g']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='connector'>
                        <div className='merger'></div>
                        <div className='line'></div>
                    </div>
                </div>

            </section>
            <section className="round quarterfinals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">

                                    <select onChange={handleOnChangeCuartos} name='4-a-1'>
                                        <option  value=''>CUARTOS</option>
                                        <option value={inputbracket['1-a']}>{inputbracket['1-a']}</option>
                                        <option value={inputbracket['2-b']} >{inputbracket['2-b']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-a-2'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-c']}</option>
                                        <option >{inputbracket['2-d']}</option>

                                    </select>

                                </div>


                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">

                                    <select onChange={handleOnChangeCuartos} name='4-b-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-e']}</option>
                                        <option >{inputbracket['2-f']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-b-2'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-g']}</option>
                                        <option >{inputbracket['2-h']}</option>

                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">

                                    <select  onChange={handleOnChangeCuartos} name='4-c-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-b']}</option>
                                        <option >{inputbracket['2-a']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-c-2'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-d']}</option>
                                        <option >{inputbracket['2-c']}</option>

                                    </select>

                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">

                                    <select onChange={handleOnChangeCuartos} name='4-d-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-f']}</option>
                                        <option >{inputbracket['2-e']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-d-2'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-h']}</option>
                                        <option >{inputbracket['2-g']}</option>

                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </section>
            <section className="round semifinals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className='participant'><select onChange={handleOnChangeSemi} name='final-a-1'>
                                    <option value=''>SEMI-FINAL</option>
                                    <option value={semi['4-a-1']}>{semi['4-a-1']}</option>
                                    <option value={semi['4-a-2']}>{semi['4-a-2']}</option>

                                </select> </div>
                                <div className="participant"><select onChange={handleOnChangeSemi} name='final-a-2'>
                                    <option value=''>SEMI-FINAL</option>
                                    <option value={semi['4-b-1']}>{semi['4-b-1']}</option>
                                    <option value={semi['4-b-2']}>{semi['4-b-2']}</option>

                                </select> </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><select onChange={handleOnChangeSemi} name='final-b-1'>
                                    <option value=''>SEMI-FINAL</option>
                                    <option value={semi['4-c-1']}>{semi['4-c-1']}</option>
                                    <option value={semi['4-c-2']}>{semi['4-c-2']}</option>

                                </select></div>
                                <div className="participant"><select onChange={handleOnChangeSemi} name='final-b-2'>
                                    <option value=''>SEMI-FINAL</option>
                                    <option value={semi['4-d-1']}>{semi['4-d-1']}</option>
                                    <option value={semi['4-d-2']}>{semi['4-d-2']}</option>

                                </select></div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </section>
            <section className="round finals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant winner"><select onChange={handleOnChangeFinal} name='final-a'>
                                    <option value=''>FINAL</option>
                                    <option value={final['final-a-1']}>{final['final-a-1']}</option>
                                    <option value={final['final-a-2']}>{final['final-a-2']}</option>

                                </select></div>
                                <div className="participant"><select onChange={handleOnChangeFinal} name='final-b'>
                                    <option value=''>FINAL</option>
                                    <option value={final['final-b-1']}>{final['final-b-1']}</option>
                                    <option value={final['final-b-2']}>{final['final-b-2']}</option>

                                </select></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='round champion'>
                <div className='winners'>
                    <div className='matchups'>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant loser'>
                                    <select name='campeon'>
                                    <option value=''>CAMPEON</option>
                                    <option value={campeon['final-a']}>{campeon['final-a']}</option>
                                    <option value={campeon['final-b']}>{campeon['final-b']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'>
                                    <select name='tercero'>
                                    <option value=''>TERCERO</option>
                                        <option value={campeon['final-a']}>{campeon['final-a']}</option>
                                        <option value={campeon['final-b']}>{campeon['final-b']}</option>
                                    </select>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
    )
}
