import React, {Component} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
//var shortid = require('shortid');



class Red1Chapter9 extends Component {

constructor(props) {
    super(props);
    this.state = {

    rightAnswers: 0,
    wrongAnswers: 0,
    answersLength: 8,
    tasks: [
        {id: "1", name: <span>1. He did not do what he was supposed to do.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en <span>not</span>-sætning i almindelig datid, og derfor er der <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "2", name: <span>2. He did the best he could.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> <span>Did</span> er hovedudsagnsord, og da sætningen hverken er en <span>not-</span>sætning eller en spørgende hovedsætning er der ikke <span>do-</span>omskrivning.</div>},
        {id: "3", name: <span>3. Does your sister like hamburgers?</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en spørgende hovedsætning i almindelig nutid, og derfor skal sætningen have <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "4", name: <span>4. It is not always easy to do the right thing.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_5.png"/> Hovedudsagnsordet i sætningen er en form af <span>to be (is)</span>, og så er der aldrig <span>do-</span>omskrivning.</div>},
        {id: "5", name: <span>5. Have you done your homework?</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_4.png"/> Udsagnsledet i sætningen er sammensat <span>(have+done)</span>, og så er der aldrig <span>do-</span>omskrivning.</div>},
        {id: "6", name: <span>6. Who did that to you?</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/blaa_1.png"/> NB. Grundledet I sætningen er et spørgende stedord, og så er der ikke <span>do-</span>omskrivning.</div>},
        {id: "7", name: <span>7. Do you think, he did the right thing?</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en spørgende hovedsætning i almindelig nutid, og derfor skal sætningen have <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "8", name: <span>8. Why did he do that?</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en spørgende hovedsætning i almindelig nutid, og derfor skal sætningen have <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "9", name: <span>9. He did not do his best to win the match.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en <span>not</span>-sætning i almindelig datid, og derfor skal der være <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "10", name: <span>10. He did as he was told.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> <span>Did</span> er hovedudsagnsord, og da sætningen hverken er en <span>not-</span>sætning eller en spørgende hovedsætning er der ikke <span>do-</span>omskrivning.</div>},    
        {id: "11", name: <span>11. Do you think, John did all he could?</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Hovedsætningen er en spørgende hovedsætning i almindelig nutid, og derfor skal sætningen have <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "12", name: <span>12. He didn’t understand a word of what they said.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en <span>not</span>-sætning i almindelig datid, og derfor skal der være <span>do</span>-omskrivning.</div>, commentWrong:""},
        {id: "13", name: <span>13. Doing the laundry was not the only thing she did every Monday. She also did her shopping.</span>, status: false, commentRight:"", commentWrong: <div className="red"> <img className="res-el" src="img/wrong2.png" /> Se <img className="link" src="img/roed_6.png"/> <span>Doing</span> og <span>did</span> optræder alle som hovedudsagnsord.</div>},    
        {id: "14", name: <span>14. Don’t leave until you hear the bell.</span>, status: true, commentRight: <div className="red"> <img className="res-el" src="img/right2.png" /> Der er tale om en bydeform <span>(go)</span> sammen med <span>not</span>, og derfor skal der være <span>do</span>-omskrivning.</div>, commentWrong:""},
        
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
        <div className="border-red-ex">
            <div className="bott-block" id="bott-block">
                <div className="head">
                    <h5> 
                        Alle sætninger herunder indeholder en form af <span className="bold-italic">to do</span>, men kun 8 af sætningerne har <span className="bold-italic">do</span>-omskrivning.
                        <br/>
                        Træk de sætninger, hvor der er <span className="bold-italic">do</span>-omskrivning, op i den røde kasse. (du har kun 8 forsøg)
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


export default Red1Chapter9