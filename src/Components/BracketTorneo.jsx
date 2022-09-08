import React, { useState } from 'react'
import './Bracket.scss'

export const BracketTorneo = (props) => {
    const [semi, setsemi] = useState({})
    const [final, setfinal] = useState({})
    const [campeon, setcampeon] = useState({})

    const torneo = props.torneo
    const settorneo = props.settorneo
    const octavos = props.octavos

    const handleOnChangeCuartos = (evento) => {
        setsemi({ ...semi, [evento.target.name]: evento.target.value })
        console.log('valor', evento.target.value)
        console.log(('selector', evento.target.name))
        console.log(semi, 'semi')

        if (evento.target.name === '4-a-1') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.a.a = evento.target.value
            settorneo(torneoauxiliar)

        }
        if (evento.target.name === '4-a-2') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.a.b = evento.target.value
            settorneo(torneoauxiliar)

        }
        if (evento.target.name === '4-b-1') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.b.a = evento.target.value
            settorneo(torneoauxiliar)


        }
        if (evento.target.name === '4-b-2') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.b.b = evento.target.value
            settorneo(torneoauxiliar)

        } if (evento.target.name === '4-c-1') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.c.a = evento.target.value
            settorneo(torneoauxiliar)

        }
        if (evento.target.name === '4-c-2') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.c.b = evento.target.value
            settorneo(torneoauxiliar)

        }
        if (evento.target.name === '4-d-1') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.d.a = evento.target.value
            settorneo(torneoauxiliar)

        }
        if (evento.target.name === '4-d-2') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.cuartos.d.b = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }

    }

    const handleOnChangeSemi = (evento) => {
        setfinal({ ...final, [evento.target.name]: evento.target.value })
        console.log(evento.target.name)
        if (evento.target.name === 'final-a-1') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.semifinal.a.a = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }
        if (evento.target.name === 'final-a-2') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.semifinal.a.b = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }
        if (evento.target.name === 'final-b-1') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.semifinal.b.a = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }
        if (evento.target.name === 'final-b-2') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.semifinal.b.b = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }
    }
    const handleOnChangeFinal = (evento) => {
        setcampeon({ ...campeon, [evento.target.name]: evento.target.value })
        const torneoauxiliar = { ...torneo }
        torneoauxiliar.campeon = campeon
        settorneo(torneoauxiliar)
        console.log(evento.target.name)
        if (evento.target.name === 'final-a') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.final.a = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }
        if (evento.target.name === 'final-b') {
            const torneoauxiliar = { ...torneo }
            torneoauxiliar.final.b = evento.target.value
            settorneo(torneoauxiliar)
            console.log(torneo)
        }
    }
    const handleOnChangeTercero = (evento) => {
        settorneo({ ...torneo, tercero: evento.target.value })
        console.log(torneo)
    }
    const handleOnChangeCampeon = (evento) => {
        settorneo({ ...torneo, campeon: evento.target.value })
        console.log(torneo)
    }


    return (
        <div className="bracket">
            <section className="round of16">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-a']}</span></div>
                                <div className="participant"><span>{octavos['2-b']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-c']}</span></div>
                                <div className="participant"><span>{octavos['2-d']}</span></div>
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
                                <div className="participant"><span>{octavos['1-e']}</span></div>
                                <div className="participant"><span>{octavos['2-f']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-g']}</span></div>
                                <div className="participant"><span>{octavos['2-h']}</span></div>
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
                                <div className='participant'><span>{octavos['1-b']}</span></div>
                                <div className='participant'><span>{octavos['2-a']}</span></div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{octavos['1-d']}</span></div>
                                <div className='participant'><span>{octavos['2-c']}</span></div>
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
                                <div className='participant'><span>{octavos['1-f']}</span></div>
                                <div className='participant'><span>{octavos['2-e']}</span></div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{octavos['1-h']}</span></div>
                                <div className='participant'><span>{octavos['2-g']}</span></div>
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
                                        {torneo.cuartos.a.a != '' ? <option value={torneo.cuartos.a.a}>{torneo.cuartos.a.a}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option value={octavos['1-a']}>{octavos['1-a']}</option>
                                        <option value={octavos['2-b']} >{octavos['2-b']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-a-2'>
                                        {torneo.cuartos.a.b != '' ? <option value={torneo.cuartos.a.b}>{torneo.cuartos.a.b}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-c']}</option>
                                        <option >{octavos['2-d']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">

                                    <select onChange={handleOnChangeCuartos} name='4-b-1'>
                                        {torneo.cuartos.b.a != '' ? <option value={torneo.cuartos.b.a}>{torneo.cuartos.b.a}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-e']}</option>
                                        <option >{octavos['2-f']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-b-2'>
                                        {torneo.cuartos.b.b != '' ? <option value={torneo.cuartos.b.b}>{torneo.cuartos.b.b}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-g']}</option>
                                        <option >{octavos['2-h']}</option>
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
                                    <select onChange={handleOnChangeCuartos} name='4-c-1'>
                                        {torneo.cuartos.c.a != '' ? <option value={torneo.cuartos.c.a}>{torneo.cuartos.c.a}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-b']}</option>
                                        <option >{octavos['2-a']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-c-2'>
                                        {torneo.cuartos.c.b != '' ? <option value={torneo.cuartos.c.b}>{torneo.cuartos.c.b}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-d']}</option>
                                        <option >{octavos['2-c']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-d-1'>
                                        {torneo.cuartos.d.a != '' ? <option value={torneo.cuartos.d.a}>{torneo.cuartos.d.a}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-f']}</option>
                                        <option >{octavos['2-e']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeCuartos} name='4-d-2'>
                                        {torneo.cuartos.d.b != '' ? <option value={torneo.cuartos.d.b}>{torneo.cuartos.d.b}</option> :
                                            <option value=''>CUARTOS</option>}
                                        <option >{octavos['1-h']}</option>
                                        <option >{octavos['2-g']}</option>
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
                                    {torneo.semifinal.a.a != '' ? <option value={torneo.semifinal.a.a}>{torneo.semifinal.a.a}</option> :
                                        <option value=''>SEMI-FINAL</option>}
                                    <option value={semi['4-a-1']}>{semi['4-a-1']}</option>
                                    <option value={semi['4-a-2']}>{semi['4-a-2']}</option>
                                </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeSemi} name='final-a-2'>
                                        {torneo.semifinal.a.b != '' ?
                                            <option value={torneo.semifinal.a.b}>{torneo.semifinal.a.b}</option>
                                            :
                                            <option value=''>SEMI-FINAL</option>
                                        }
                                        <option value={semi['4-b-1']}>{semi['4-b-1']}</option>
                                        <option value={semi['4-b-2']}>{semi['4-b-2']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeSemi} name='final-b-1'>
                                        {torneo.semifinal.b.a != '' ? <option value={torneo.semifinal.b.a}>{torneo.semifinal.b.a}</option> :
                                            <option value=''>SEMI-FINAL</option>}
                                        <option value={semi['4-c-1']}>{semi['4-c-1']}</option>
                                        <option value={semi['4-c-2']}>{semi['4-c-2']}</option>
                                    </select>
                                </div>
                                <div className="participant"><select onChange={handleOnChangeSemi} name='final-b-2'>
                                    {torneo.semifinal.b.b != '' ? <option value={torneo.semifinal.b.b}>{torneo.semifinal.b.b}</option> :
                                        <option value=''>SEMI-FINAL</option>}
                                    <option value={semi['4-d-1']}>{semi['4-d-1']}</option>
                                    <option value={semi['4-d-2']}>{semi['4-d-2']}</option>
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
            <section className="round finals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant winner">
                                    <select onChange={handleOnChangeFinal} name='final-a'>
                                        {torneo.final.a != '' ? <option value={torneo.final.a}>{torneo.final.a}</option> :
                                            <option value=''>FINAL</option>}
                                        <option value={final['final-a-1']}>{final['final-a-1']}</option>
                                        <option value={final['final-a-2']}>{final['final-a-2']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeFinal} name='final-b'>
                                        {torneo.final.b != '' ? <option value={torneo.final.b}>{torneo.final.b}</option> :
                                            <option value=''>FINAL</option>}
                                        <option value={final['final-b-1']}>{final['final-b-1']}</option>
                                        <option value={final['final-b-2']}>{final['final-b-2']}</option>
                                    </select>
                                </div>
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
                                    <select onChange={handleOnChangeCampeon} name='campeon'>
                                        {torneo.campeon != '' ? <option value={torneo.campeon}>{torneo.campeon}</option> :
                                            <option value=''>CAMPEON</option>}
                                        <option value={campeon['final-a']}>{campeon['final-a']}</option>
                                        <option value={campeon['final-b']}>{campeon['final-b']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'>
                                    <select onChange={handleOnChangeTercero} name='tercero'>
                                        {torneo.tercero != '' ? <option value={torneo.tercero}>{torneo.tercero}</option> :
                                            <option value=''>TERCERO</option>}
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