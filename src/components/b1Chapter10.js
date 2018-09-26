import React, {Component} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';




class Blue1Chapter10 extends Component {

constructor(props) {
    super(props);
    this.state = {

    rightAnswers: 0,
    wrongAnswers: 0,
    answersLength: 7,
    tasks: [
        {id: "11", name: "1. Der blev spillet fodbold hele dagen.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form, <ins className="not-italic">blev spillet</ins>, angiver at sætningen er passiv.</div>, commentWrong:""},
        {id: "21", name: "2. Drengene spiller fodbold hver torsdag.", status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Forkert! Se indledningen i grammatikken om passiv. Sætningen er aktiv. Det ses bl.a. ved, at grundledet i sætningen, <ins className="not-italic">Drengene</ins>, udfører handlingen, <ins className="not-italic">spiller fodbold</ins>. Derudover er udsagnsleddets form ikke passiv.</div>},
        {id: "31", name: "3. Det siges, at huset er mindst hundrede år gammelt.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form, <ins className="not-italic">siges</ins>, angiver, at sætningen er passiv.</div>, commentWrong:""},
        {id: "41", name: "4. Filmen blev taget af plakaten.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form, <ins className="not-italic">blev taget</ins>, angiver, at sætningen er passiv.</div>, commentWrong: ""},
        {id: "51", name: "5. Mine venner blev til langt ud på aftenen.", status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Forkert! Se indledningen i grammatikken om passiv. Sætningen er aktiv. Det ses bl.a. ved, at grundledet i sætningen, <ins className="not-italic">Mine venner</ins>, udfører handlingen, <ins className="not-italic">blev</ins>. Derudover er udsagnsleddets form ikke passiv.</div>},
        {id: "61", name: "6. I min familie spiser vi aftensmad klokken 6.", status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Forkert! Se indledningen i grammatikken om passiv. Sætningen er aktiv. Det ses bl.a. ved, at grundledet i sætningen, <ins className="not-italic">vi</ins>, udfører handlingen, <ins className="not-italic">spiser</ins>. Derudover er udsagnsleddets form ikke passiv.</div>},
        {id: "71", name: "7. Det menes, at mange lande vil deltage.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form, <ins className="not-italic">menes</ins>, angiver, at sætningen er passiv.</div>, commentWrong:""},
        {id: "81", name: "8. Hun blev mindet om sin skoletid af sin gamle lærer.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form, <ins className="not-italic">blev mindet</ins>, angiver, at sætningen er passiv.</div>, commentWrong:""},
        {id: "91", name: "9. Jeg kan desværre ikke komme i eftermiddag.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Forkert! Se indledningen i grammatikken om passiv. Sætningen er aktiv. Det ses bl.a. ved, at det er grundledet i sætningen, <ins className="not-italic">jeg</ins>, som <ins className="not-italic">kan komme</ins>. Derudover er udsagnsleddets form ikke passiv.</div>},
        {id: "101", name: "10. Kampen blev en stor oplevelse.", status: false, commentRight: "", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Forkert! Se indledningen i grammatikken om passiv. Sætningen er aktiv. Det ses bl.a. ved, at grundledet i sætningen, <ins className="not-italic">kampen</ins>, som <ins className="not-italic">blev en stor oplevelse</ins>. Derudover er udsagnsleddets form ikke passiv.</div>},
        {id: "111", name: "11. Det antages, at den næste statsminister ikke er født i landet.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form: <ins className="not-italic">antages</ins>, angiver, at sætningen er passiv.</div>, commentWrong:""},
        {id: "121", name: "12. Hun blev altid rost.", status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Udsagnsleddets form: <ins className="not-italic">blev rost</ins>, angiver, at sætningen er passiv.</div>, commentWrong:""}   
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
                        Syv af de danske sætninger nedenfor indeholder passiv, de andre gør ikke. 
                        <br/>
                        Træk sætningerne med passiv op i den røde kasse. (7 forsøg)
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


export default Blue1Chapter10