import React, {Component} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';




class Blue2Chapter18 extends Component {

constructor(props) {
    super(props);
    this.state = {

    rightAnswers: 0,
    wrongAnswers: 0,
    answersLength: 21,
    tasks: [
        {id: "12", name: "big", placeHold: "target1"},
        {id: "22", name: "hard", placeHold: "target2" },
        {id: "32", name: "spring", placeHold: "target2" },
        {id: "42", name: "teach", placeHold: "target2" },
        {id: "52", name: "sleep", placeHold: "target2"},
        {id: "62", name: "sad", placeHold: "target1"},
        {id: "72", name: "clever", placeHold: "target2"},
        {id: "82", name: "fat", placeHold: "target1"},
        {id: "92", name: "sit", placeHold: "target1" },
        {id: "102", name: "stand", placeHold: "target2"},
        {id: "112", name: "begin", placeHold: "target1"},
        {id: "122", name: "hot", placeHold: "target1"},
        {id: "132", name: "green", placeHold: "target2"},
        {id: "142", name: "walk", placeHold: "target2"},
        {id: "152", name: "strong", placeHold: "target2"},
        {id: "162", name: "spin", placeHold: "target1"},
        {id: "172", name: "swim", placeHold: "target1"},
        {id: "182", name: "write", placeHold: "target2"},
        {id: "192", name: "lean", placeHold: "target2"},
        {id: "202", name: "red", placeHold: "target1"},
        {id: "212", name: "regret", placeHold: "target1"},             
    ],
    droppedTasksLeft: [],
    droppedTasksRight: [],
    comment: "",

    
    }
    this.handleDrop = this.handleDrop.bind(this);
}


 handleDrop = (ev, target) => {
    let droppedTasksLeft = this.state.droppedTasksLeft;
    let droppedTasksRight = this.state.droppedTasksRight;
    let tasks = this.state.tasks.slice();
    const oneTask = {name: ev.dragData.name, placeHold: ev.dragData.placeHold, id: ev.dragData.id};
   
     console.log ("event", ev)

    // checking if answer is correct then push it with red or green colour 

     let answerCorrect = oneTask.placeHold ===target;

    if (target==="target1") {
        if (answerCorrect) {
            droppedTasksLeft.push(
                <div className="green">{oneTask.name}</div>)
        } else {
            droppedTasksLeft.push(
                <div className="red">{oneTask.name}</div>)
        }
            
    } else {
        if (answerCorrect) {
            droppedTasksRight.push(
                <div className="green">{oneTask.name}</div>)
        } else {
            droppedTasksRight.push(
                <div className="red">{oneTask.name}</div>)
        }
    }

   
    const taskToDelete = tasks.findIndex((tsk)=> {
        return tsk.id === oneTask.id
    });
    tasks.splice(taskToDelete, 1);
      
    let comment = this.state.comment;
    let rightAnswers = this.state.rightAnswers;
    let wrongAnswers = this.state.wrongAnswers;

   //counting right and wrong answers + rendering a correcponding comment

    if (answerCorrect) {
                (rightAnswers = this.state.rightAnswers + 1) &&
                (
                   comment = <div className="red"> <img className="res-el" src="img/right2.png" alt="pictute"/></div>
                ) 
            } else {
                (wrongAnswers = this.state.wrongAnswers + 1 ) &&
                (
                    comment = <div className="red"> <img className="res-el" src="img/wrong2.png" alt="pictute" /> Forkert! Se <img className="link" src="img/blaa_2.png" alt="pictute"/></div>     
                ) 

            }

    this.setState({ droppedTasksLeft: droppedTasksLeft, droppedTasksRight: droppedTasksRight, tasks: tasks, comment: comment, rightAnswers: rightAnswers, wrongAnswers: wrongAnswers});
 }

render() {
    let tasks = [];
     this.state.tasks.forEach ((t) => { 
        tasks.push(
            <div>
                <DragDropContainer 
                    targetKey="foo" 
                    
                    dragData={{name: t.name, placeHold: t.placeHold, id: t.id}} 
                    onDragStart={()=>(console.log('start'))}
                    onDrag={()=>(console.log('dragging'))}
                    onDragEnd={()=>(console.log('end'))}
                    onDrop={(e)=>(console.log(e))}
                >
                    <div key={t.name}>{t.name}</div>
                </DragDropContainer>
                
            </div>
        );
    });
    // is Finish counts a number of allowed attempts and when they are used gives the results of the test
    const isFinish = this.state.wrongAnswers + this.state.rightAnswers === this.state.answersLength;
    return (

        <div className="App">
        <div className="border-blue-ex">
            <div className="bott-block" id="bott-block">
                <div className="head">
                    <h5> 
                        Nedenfor er der en række udsagnsord, tillægsord og udsagnsord. Nogle følger reglen om konsonantfordobling, mens andre ikke gør. 
                        <br/>
                        Træk ordene op i de rigtige kasser. (21 ord)
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
                    <div className="container-drag box"> 
                        <div className="row flex">
                            <div className="col">
                            <DropTarget 
                                onHit={(e) => this.handleDrop(e,"target1")}
                                targetKey="foo" >
                                    <div className="placeHolder-name">Konsonantfordobling:</div>
                                    <p>{this.state.droppedTasksLeft}</p>
                                </DropTarget>
                            </div>
                            <div className="col">
                            <DropTarget 
                                onHit={(e) => this.handleDrop(e, "target2")}
                                targetKey="foo" >
                                    <div className="placeHolder-name">Ikke konsonantfordobling:</div>
                                    <p>{this.state.droppedTasksRight}</p>
                                </DropTarget>
                            </div>
                        </div>
                        <div className="row flex words-box">
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


export default Blue2Chapter18