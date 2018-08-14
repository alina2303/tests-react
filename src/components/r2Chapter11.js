import React, {Component} from 'react';


class Red2Chapter11 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rightAnswers: 0,
            wrongAnswers: 0,
            answersLength: 16,
            answersMap: {}

        } 
        this.onChange = this.onChange.bind(this);
        this.questionsMap = {
            1: {
                heading: <p>1. Udsagnsleddet siger her noget om <strong>EVNE</strong>:</p>,
                question: <span>He says that he ___play football.</span>,
                answers: { can:'', could: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_6.png"/> Sætningen er nutid, hvorfor datidsformen <span>could</span> ikke giver mening. </div></div>, will: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_6.png"/> <span>Will</span> bruges ikke til at udtrykke evne. </div></div>, must: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_6.png"/> <span>Must</span> bruges ikke til at udtrykke evne. </div></div>}
            },
            2: {
                heading: <p>2. Udsagnsleddet siger her noget om <strong>MULIGHED</strong>:</p>,
                question: <span>Playing an instrument ____ lead to a career as a musician.</span>,
                answers: { may:'', can: '', will: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_8.png"/> <span>Will</span> bruges ikke til at udtrykke mulighed. </div></div>, must:<div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_8.png"/> <span>Must</span> bruges ikke til at udtrykke mulighed.</div></div>}
            },
            3: {
                heading: <p>3. Udsagnsleddet siger her noget om <strong>TILLADELSE</strong>:</p>,
                question: <span>The very moment the bell sounds, you _____ go.</span>,
                answers: { may:'', can: '', could: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_7.png"/> Sætningen er nutid, hvorfor datidsformen <span>could</span> ikke giver mening her. </div></div>}
            },
            4: {
                heading: <p>4. Udsagnsleddet siger her noget om <strong>VILJE</strong>:</p>,
                question: <span>Did you use bad language when you were young? Christ no! My father ____ never accept that.</span>,
                answers: { will: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_10.png"/> Sætningen drejer sig om datiden. Nutidsformen <span>will</span> giver ingen mening. </div></div>, would: '', must: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_10.png"/> <span>Must</span> giver ingen mening her.</div></div>}
            },
            5: {
                heading: <p>5. Udsagnsleddet siger her noget om <strong>NØDVENDIGHED</strong>:</p>,
                question: <span>People ____ eat to survive.</span>,
                answers: { will:<div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_11.png"/> <span>Will</span> kan ikke bruges til at udtrykke nødvendighed.</div></div>, can: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_11.png"/> <span>Can</span> kan ikke bruges til at udtrykke nødvendighed.</div></div>, must: ''}
            },
            6: {
                heading: <p>6. Udsagnsleddet siger igen noget om <strong>NØDVENDIGHED</strong>:</p>,
                question: <span>If you want to win, you ____ train hard.</span>,
                answers: { ['ought to']:<div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_11.png"/> <span>Ought to</span> udtrykker ikke nødvendighed.</div></div>, ['have to']: '', must: ''}
            },
            7: {
                heading: <p>7. Udsagnsleddet siger her noget om <strong>VILJE</strong>:</p>,
                question: <span>Forget going to the party! I ____ never allow it.</span>,
                answers: { will:'', would: '', must: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_10.png"/> <span>Must</span> giver ingen mening her.</div></div> }
            },
            8: {
                heading: <p>8. Udsagnsleddet siger her noget om <strong>ØNSKE</strong>:</p>,
                question: <span>What a wonderful car.  _____ you take me for a spin?</span>,
                answers: { should:<div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_9.png"/> <span>Should</span> giver ingen mening her.</div></div>, ['ought to']: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_9.png"/> <span>Ought to</span> giver ingen mening her.</div></div>, will: '', would: ''}
            },
            9: {
                heading: <p>9. Udsagnsleddet siger her noget om <strong>TILLADELSE</strong>:</p>,
                question: <span>When my father was young, he ___ come and go as he wanted to.</span>,
                answers: { can:<div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_7.png"/> <span>Can</span> giver ingen mening, fordi sætningen er i datid.</div></div>, could: '', might: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_7.png"/> <span>Might</span> giver ingen mening her.</div></div>, would: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_7.png"/> <span>Would</span> giver ingen mening her.</div></div>}
            },
            10: {
                heading: <p>10. Udsagnsleddet siger her noget om <strong>EVNE</strong>:</p>,
                question: <span>In my club, there is a guy who ____ hold his breath under water for more than four minutes.</span>,
                answers: { can:'', could: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_6.png"/> Sætningen er nutid, hvorfor datidsformen <span>could</span> ikke giver mening her.</div></div>, will: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_6.png"/> <span>Will</span> bruges ikke til at udtrykke evne.</div></div>, must: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_6.png"/> <span>Must</span> bruges ikke til at udtrykke evne.</div></div>}
            },
            11: {
                heading: <p>11. Udsagnsleddet siger her noget om <strong>MULIGHED</strong>:</p>,
                question: <span>I read in the paper that the band ____ visit Denmark next year.</span>,
                answers: { might:'', can: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_8.png"/> <span>Can</span> giver ingen mening her.</div></div>, will: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_8.png"/> <span>Will</span> udtrykker ikke en mulighed.</div></div>, must: <div class="red"><img class="res-el" src="img/wrong2.png" />Forkert. Se <div class="tool-tip-holder"><img class="link" src="img/roed_8.png"/> <span>Must</span> udtrykker ikke en mulighed.</div></div>}
            }
        }
    }

    onChange(value, questionKey) {
        let state = this.state
        const isTrueAnswer = this.questionsMap[questionKey].answers[value];

        if (!state.answersMap[questionKey]) { 
            state.answersMap[questionKey]=[];
        }
        if (state.answersMap[questionKey].indexOf(value) >= 0) {
            return null;
        }
        
        if(isTrueAnswer) {
            state.wrongAnswers =  this.state.wrongAnswers + 1;
        } else {
            state.rightAnswers = this.state.rightAnswers + 1;
        }
       const newAnswers = state.answersMap[questionKey].concat([value]);
        
        state = state.answersMap[questionKey] = newAnswers;
        this.setState(state);
        
        
    
    }

    renderQuestions() {
        const questionsKeys = Object.keys(this.questionsMap);
     
        const questions = questionsKeys.map((key, index) => {
            let answers = Object.keys(this.questionsMap[key].answers);
                answers = answers.map((answ, index) => {
                    return (<li onClick={() => {this.onChange(answ, key)}} key={index + 'answer'}>{answ}</li>);
                });
                
            let hints = this.state.answersMap[key];
            if (hints && hints.length) {
                hints = hints.map((hint) => {
                    const newHint = this.questionsMap[key].answers[hint];
                    return  newHint ? <p className="hint-block"><span>{hint}</span> = <p className="explain-when-wrong">{newHint}</p></p> : (<p><span className="correct-answer">{hint} = <img className="res-el" src="img/right2.png" alt="" /></span></p>)
                });
            }
            
            return (
                
                    <div key={index} className="test-box">
                        <div className="question-heading">{this.questionsMap[key].heading}</div>
                        <div className="question-box">{this.questionsMap[key].question}</div>
                        <ul className="answer-box">{answers}</ul>  
                        <div className="hint">{hints}</div>          
                    </div> 
                    
      
            );
        })
        return questions;
    }

    render(){
        console.log(this.renderQuestions())
        const isFinish = this.state.rightAnswers + this.state.wrongAnswers === this.state.answersLength;
        return( 
            
            <div className="App">
                <div className="border-red-ex">
                    <div className="bott-block" id="bott-block">
                        <div className="head">
                            <h5> 
                                Nedenfor er der 11 sætninger, hvor der mangler et mådesudsagnsord på den tomme plads.  
                                <br/>
                                Klik på den/de rigtige mådesudsagnsord i boksene. (16 klik, max 16 point)
                            </h5>
                        </div>
                        <div className="result counter"> 
                            <div className="tru"> 
                                <img className="res-el" src="img/right2.png" alt="" />
                                <span className="counter-right">{this.state.rightAnswers}</span> 
                            </div> 
                            <div> 
                                <img className="res-el" src="img/wrong2.png" alt=""  />
                                <span className="counter-wrong">{this.state.wrongAnswers}</span>
                            </div>
                        </div>
                        <div className={isFinish ? "form-group disabled-click" : "form-group"} id="7086541136608">
                            {this.renderQuestions()}
                        {isFinish ? (<div className="test-result">Du er nu færdig med opgaven. Du havde {this.state.rightAnswers} rigtige ud af {this.state.answersLength}</div>) : <div></div>}
                    </div>
                    </div> 
                </div>
            </div>
        )  
    }}
    export default Red2Chapter11;