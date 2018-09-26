import React, {Component} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';




class Green1Chapter12 extends Component {

constructor(props) {
    super(props);
    this.state = {

    rightAnswers: 0,
    wrongAnswers: 0,
    answersLength: 8,
    tasks: [
        {id: "114", name: <span>1. They had a better dinner.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "214", name: <span>2. John was a better hockey player than Johnny.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/gron_15.png"/>. Her bruges <span>better</span> til at sammenligne John og Johnny. Sætningen er derfor korrekt.</div>},
        {id: "314", name: <span>3. Compared to the grief of losing her father, the lack of money was a much smaller problem.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/gron_15.png"/>. Her bruges <span>smaller</span> til at sammenligne <span>the grief of losing her father</span> og <span>the lack of money</span>. Sætningen er derfor korrekt.</div>},
        {id: "414", name: <span>4. Jimmy and Susan suddenly faced a smaller problem.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "514", name: <span>5. I live in a larger house than my friend.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/gron_15.png"/>. Her bruges <span>larger</span> til at sammenligne 2 huse. Sætningen er derfor korrekt.</div>},
        {id: "614", name: <span>6. If you see that as a bigger issue, you are crazy.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "714", name: <span>7. The door opened, and a younger woman stepped in.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "814", name: <span>8. They had booked a longer vacation for next summer.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "914", name: <span>9. His horse won, and the cashier paid him a bigger sum.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "1014", name: <span>10. John’s grandfather was an older man.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},
        {id: "1114", name: <span>11. My Grandfather is older than yours.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/gron_15.png"/>. Her bruges <span>older</span> til at sammenligne bedstefædre. Sætningen er derfor korrekt.</div>},
        {id: "1214", name: <span>12. John and Joan wanted to live in a bigger city.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /></div>, commentWrong:""},         
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
        <div className="border-green-ex">
            <div className="bott-block" id="bott-block">
                <div className="head">
                    <h5> 
                        Nedenfor er der 12 sætninger, som alle indeholder et tillægsord bøjet i 2. grad (komparativ).
                        <br/>
                        Otte af sætningerne indeholder en ”falsk” komparativ - og derfor er forkert. Træk dem op i den røde kasse. (8 forsøg)
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
                    <p>Sætninger med falsk komparativ:</p>
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


export default Green1Chapter12