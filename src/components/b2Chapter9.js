import React, {Component} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';




class Blue2Chapter9 extends Component {

constructor(props) {
    super(props);
    this.state = {

    rightAnswers: 0,
    wrongAnswers: 0,
    answersLength: 6,
    tasks: [
        {id: "12", name: "1. Jeg er ikke altid glad.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_5.png"/>. <span>I am not always happy.</span></div>},
        {id: "22", name: "2. Hvem tror du vinder kampen?", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> <span>Who <span className="bold-italic">do</span> you think will win the match?</span></div>, commentWrong: ""},
        {id: "32", name: "3. Har du set min cykel i dag?", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_4.png"/>. <span>Have you seen my bike today?</span></div>},
        {id: "42", name: "4. Lad være med at fortælle det til nogen.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> <span><span className="bold-italic">Don’t</span> tell anyone.</span></div>, commentWrong: ""},
        {id: "52", name: "5. Hvorfor siger du aldrig sandheden?", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> <span>Why <span className="bold-italic">don’t</span> you ever tell the truth?</span></div>, commentWrong: ""},
        {id: "62", name: "6. Må jeg byde på en kop kaffe?", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_4.png"/>. <span>Can I offer you a cup of coffee?</span></div>},
        {id: "72", name: "7. Hvad skete der, da du startede bilen?", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_1.png"/>, NB. <span>What happened when you started the car?</span></div>},
        {id: "82", name: "8. Synes du virkelig, at bogen er god?", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> <span><span className="bold-italic">Do</span> you really think that the book is good?</span></div>, commentWrong: ""},
        {id: "92", name: "9. Min bror kan ikke starte bilen.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_4.png"/>. <span>My brother cannot start the car.</span></div>},
        {id: "102", name: "10. Mine venner var slet ikke klar til at tage på ferie.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_5.png"/>. <span>My friends were not at all ready to go on vacation.</span></div>},
        {id: "112", name: "11. Lad nu være med at prøve at forstå hvordan motoren fungerer.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> <span><span className="bold-italic">Don’t</span> try to understand how the engine works.</span></div>, commentWrong: ""},
        {id: "122", name: "12. Jeg er ikke altid glad for den måde min søster opfører sig.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_5.png"/>. <span>I am not always happy with the way my sister behaves.</span></div>},
        {id: "132", name: "13. Tror du ikke, at det snart begynder at regne?", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> <span><span className="bold-italic">Don’t</span> you think that it will start raining soon?</span></div>, commentWrong: ""},
        {id: "142", name: "14. De ville simpelthen ikke acceptere, at tiden var løbet ud.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_4.png"/>. <span>They would simply not accept that time had run out.</span></div>},
              
    ],
    droppedTasks: [],
    comment: "",
    
    }
    this.handleDrop = this.handleDrop.bind(this);
}


 handleDrop = (ev) => {
    let droppedTasks = this.state.droppedTasks;
    let tasks = this.state.tasks.slice();
    const oneTask = {name: ev.dragData.name, status: ev.dragData.status, id: ev.dragData.id, commentRight: ev.dragData.commentRight, commentWrong: ev.dragData.commentWrong};
    droppedTasks.push(
        <div>{oneTask.name}</div>);
    const taskToDelete = tasks.findIndex((tsk)=> {
        return tsk.id === oneTask.id
    });
    tasks.splice(taskToDelete, 1);
      
    let comment = this.state.comment;
    let rightAnswers = this.state.rightAnswers;
    let wrongAnswers = this.state.wrongAnswers;

    

    if (oneTask.status === true) {
                (rightAnswers = this.state.rightAnswers + 1) &&
                (
                   comment = <div>{oneTask.commentRight}</div>
                )
            } else {
                (wrongAnswers = this.state.wrongAnswers + 1 ) &&
                (
                    comment = <div>{oneTask.commentWrong}</div>      
                )
            }
    this.setState({droppedTasks: droppedTasks, tasks: tasks, comment: comment, rightAnswers: rightAnswers, wrongAnswers: wrongAnswers});
 }

render() {
    let tasks = [];
     this.state.tasks.forEach ((t) => { 
        tasks.push(
            <div>
                <DragDropContainer 
                    targetKey="foo" 
                    dragData={{name: t.name, status: t.status, commentRight: t.commentRight, commentWrong: t.commentWrong, id: t.id}} 
                    onDragStart={()=>(console.log('start'))}
                    onDrag={()=>(console.log('dragging'))}
                    onDragEnd={()=>(console.log('end'))}
                    onDrop={(e)=>(console.log(e))}
                >
                    <div>{t.name}</div>
                </DragDropContainer>
            </div>
        );
    });
    const isFinish = this.state.wrongAnswers + this.state.rightAnswers === this.state.answersLength;
    return (

        <div className="App">
        <div className="border-blue-ex">
            <div className="bott-block" id="bott-block">
                <div className="head">
                    <h5> 
                        Herunder er der en række danske sætninger, hvoraf nogle har behov for <span className="bold-italic">do</span>-omskrivning, når de oversættes til engelsk? 
                        <br/>
                        Træk de seks sætninger, som kræver <span className="bold-italic">do</span>-omskrivning, op i den røde kasse. (6 forsøg)
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
                <div className={isFinish ? "form-group dgaggable-sentences disabled-drag" : "form-group dgaggable-sentences"}>
                    <div className="container-drag"> 
                        <div className="col">
                           <DropTarget 
                            onHit={this.handleDrop}
                            targetKey="foo" >
                                <p>{this.state.droppedTasks}</p>
                            </DropTarget>
                        </div>
                        <div className="row flex">
                            <div className="col right">{tasks}</div>
                            <div className="col left">{this.state.comment}</div>
                        </div>
                    </div>      
                    {isFinish ? <div className="test-result">Du er nu færdig med opgaven. Du havde {this.state.rightAnswers} rigtige ud af {this.state.answersLength}</div> : <div></div>}
                </div>
            </div>             
        </div>
    </div>
  
    );
    }
}


export default Blue2Chapter9