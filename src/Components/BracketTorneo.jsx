import React from 'react'
import './Bracket.scss'

export const BracketTorneo = (props) => {
    const inputbracket=props.inputbracket
    console.log('props',inputbracket)
    return (
        <div className="bracket">

            <section className="round of16">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant winner"><span>{inputbracket['1-a']}</span></div>
                                <div className="participant"><span>{inputbracket['1-b']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{inputbracket['1-c']}</span></div>
                                <div className="participant winner"><span>{inputbracket['2-d']}</span></div>
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
                                <div className="participant winner"><span>{inputbracket['2-f']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{inputbracket['1-g']}</span></div>
                                <div className="participant winner"><span>{inputbracket['2-h']}</span></div>
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
                                <div className='participant'><span>{inputbracket['2-g']}</span></div>
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
                                <div className='participant'><span>bolivia</span></div>
                                <div className='participant'><span>peru</span></div>
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
            <div className="participant winner"><span>1</span></div>
            <div className="participant"><span>2</span></div>
           </div>
         </div>
         <div className="matchup">
           <div className="participants">
             <div className="participant"><span>Dos</span></div>
             <div className="participant winner"><span>Siete</span></div>
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
             <div className="participant"><span>Treis</span></div>
             <div className="participant winner"><span>Seis</span></div>
           </div>
         </div>
         <div className="matchup">
           <div className="participants">
             <div className="participant"><span>Cuatro</span></div>
             <div className="participant winner"><span>Cinco</span></div>
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
                                <div className="participant winner"><span>Uno</span></div>
                                <div className="participant"><span>Dos</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant winner"><span>Seis</span></div>
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
                                <div className="participant winner"><span>Uno</span></div>
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
