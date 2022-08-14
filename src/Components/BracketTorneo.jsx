import React, { useState } from 'react'
import './Bracket.scss'

export const BracketTorneo = (props) => {
    const [semi, setsemi] = useState('')

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

                                    <select name='4-a-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-a']}</option>
                                        <option >{inputbracket['2-b']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select name='4-a-2'>
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

                                    <select name='4-b-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-e']}</option>
                                        <option >{inputbracket['2-f']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select name='4-b-2'>
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

                                    <select name='4-c-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-b']}</option>
                                        <option >{inputbracket['2-a']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select name='4-c-2'>
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

                                    <select name='4-d-1'>
                                        <option value=''>CUARTOS</option>
                                        <option >{inputbracket['1-f']}</option>
                                        <option >{inputbracket['2-e']}</option>
                                    </select>

                                </div>
                                <div className="participant">
                                    <select name='4-d-2'>
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
                                <div className='participant'><select name='4-d-2'>
                                    <option value=''>SEMI-FINAL</option>
                                    <option >a</option>
                                    <option >b</option>

                                </select> </div>
                                <div className="participant"><span>Dos</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>Seis</span></div>
                                <div className="participant"><span>Cinco</span></div>
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
                                <div className="participant"><span>Uno</span></div>
                                <div className="participant"><span>Seis</span></div>
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
                                <div className='participant winner'>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
