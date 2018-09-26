import React, {Component} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';




class Blue1Chapter12 extends Component {

constructor(props) {
    super(props);
    this.state = {

    rightAnswers: 0,
    wrongAnswers: 0,
    answersLength: 23,
    tasks: [
        {id: "120", name: "his", placeHold: "target2", commentRight: <div className="red"> <img className="res-el" src="img/right2.png"/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt=""/> Forkert! <span>His</span> er et stedord. (Se værktøjskassen 3.2)</div> },
        {id: "220", name: "old", placeHold: "target1", commentRight: <div className="red"> <img className="res-el" src="img/right2.png" alt=""/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt=""/> Forkert! <span>His</span> er et stedord.</div> },
        {id: "320", name: "amazingly", placeHold: "target2",commentRight: <div className="red"> <img className="res-el" src="img/right2.png" alt="picture"/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt="picture"/> Forkert! <span>His</span> er et stedord.</div> },
        {id: "420", name: "important", placeHold: "target1", commentRight: <div className="red"> <img className="res-el" src="img/right2.png" alt="picture"/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt="picture"/> Forkert! <span>His</span> er et stedord.</div> },
        {id: "520", name: "lucky", placeHold: "target1", commentRight: <div className="red"> <img className="res-el" src="img/right2.png" alt="picture"/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt="picture"/> Forkert! <span>His</span> er et stedord.</div>},
        {id: "620", name: "dogs", placeHold: "target2", commentRight: <div className="red"> <img className="res-el" src="img/right2.png" alt="picture"/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt="picture"/> Forkert! <span>His</span> er et stedord.</div>},
        {id: "720", name: "cool", placeHold: "target1", commentRight: <div className="red"> <img className="res-el" src="img/right2.png" alt="picture"/></div>, commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" alt="picture"/> Forkert! <span>His</span> er et stedord.</div>},
        {id: "820", name: "pretty", placeHold: "target1"},
        {id: "920", name: "narrow", placeHold: "target1" },
        {id: "1020", name: "they", placeHold: "target2"},
        {id: "1120", name: "some", placeHold: "target2"},
        {id: "1220", name: "into", placeHold: "target2"},
        {id: "1320", name: "beautiful", placeHold: "target1"},
        {id: "1420", name: "ate", placeHold: "target2"},
        {id: "1520", name: "played", placeHold: "target2"},
        {id: "1620", name: "our", placeHold: "target2"},
        {id: "1720", name: "school", placeHold: "target2"},
        {id: "1820", name: "never", placeHold: "target2"},
        {id: "1920", name: "nice", placeHold: "target1"},
        {id: "2020", name: "thirsty", placeHold: "target1"},
        {id: "2120", name: "happy", placeHold: "target1"}, 
        {id: "2220", name: "bottle", placeHold: "target2"},
        {id: "2320", name: "great", placeHold: "target1"}            
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
    const oneTask = {name: ev.dragData.name, placeHold: ev.dragData.placeHold, id: ev.dragData.id, commentRight: ev.dragData.commentRight, commentWrong: ev.dragData.commentWrong};
   
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
                   comment = <div>{oneTask.commentRight}</div>
                ) 
            } else {
                (wrongAnswers = this.state.wrongAnswers + 1 ) &&
                (
                    comment = <div>{oneTask.commentWrong}</div>) 

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
                    
                    dragData={{name: t.name, placeHold: t.placeHold, id: t.id, commentRight: t.commentRight, commentWrong: t.commentWrong}} 
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
                            Nedenfor er der en række ord, som du skal trække over i den rigtige kasse: ”Tillægsord” eller ”Ikke tillægsord”. (23 ord)
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
                                        <div className="placeHolder-name">Tillægsord:</div>
                                        <p>{this.state.droppedTasksLeft}</p>
                                    </DropTarget>
                                </div>
                                <div className="col">
                                <DropTarget 
                                    onHit={(e) => this.handleDrop(e, "target2")}
                                    targetKey="foo" >
                                        <div className="placeHolder-name">Ikke tillægsord:</div>
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


export default Blue1Chapter12