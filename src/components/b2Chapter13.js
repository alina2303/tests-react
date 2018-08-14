import React, { Component } from 'react';

class Blue2Chapter13 extends Component {
    constructor(props) {
		super(props);
		this.state = {
			rightAnswers: 0,
			wrongAnswers: 0,
			answersLength: 16
		}

		this.onChange = this.onChange.bind(this);
	}

	onChange(e, value) {
        let state = this.state;
               
		if (value) {
			state.rightAnswers = this.state.rightAnswers + 1;
		} else {
			state.wrongAnswers = this.state.wrongAnswers + 1;
        }
            this.setState(state);
           
        e.target.classList.add('touched');
		
    }

    

	render() {
		const isFinish = this.state.rightAnswers + this.state.wrongAnswers === this.state.answersLength;
		return (
			<div className="App">
				<div className="border-blue-ex">
					<div className="bott-block" id="bott-block">
						<div className="head">
							<h5> 
								I teksten er nogle ord fremhævet med fed. Klik på dem som er biord. (16 klik, max 16 point)
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
							<div className={isFinish ? "form-group disabled-click" : "form-group"}  id="7086541136601">
								My
								<strong onClick={(e) => {this.onChange(e)}}> best <span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""/>Forkert! <span>best</span> er et tillægsord.) 
									</span>
								</strong> friend at school was
								<strong onClick={(e) => {this.onChange(e, 1)}}> incredibly
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span>
								</strong> 
								<strong onClick={(e) => {this.onChange(e, 1)}}> good
									<span className="gp-1"> 
										(<img className="res-el" src="img/wrong2.png" alt="" /> Forkert! <span>good</span> er et tillægsord.)
									</span>
								</strong> at drawing. She 
								<strong onClick={(e) => {this.onChange(e)}}> also
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span> 
								</strong> played the trumpet
								<strong onClick={(e) => {this.onChange(e, 1)}}> extremely
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong>
								<strong onClick={(e) => {this.onChange(e, 1)}}> well
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span> 
								</strong>, and she was part of the school’s 
								<strong onClick={(e) => {this.onChange(e, 1)}}> widely
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong>
								<strong onClick={(e) => {this.onChange(e)}}> famous
									<span className="gp-1"> 
										(<img className="res-el" src="img/wrong2.png" alt="" /> Forkert! <span>famous</span> er et tillægsord.)
									</span>
								</strong> band. During a trip to Spain, both her talents became
								
								<strong onClick={(e) => {this.onChange(e)}}> useful
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>useful</span> er et tillægsord.)
									</span> 
								</strong>.
                                <br/>
								<br/>
								The band participated in a competition in the <strong onClick={(e) => {this.onChange(e)}}> old
									<span className="gp-1"> 
										(<img className="res-el" src="img/wrong2.png" alt="" /> Forkert! <span>old</span> er et tillægsord.)
									</span>
								</strong>
								<strong onClick={(e) => {this.onChange(e)}}> royal
									<span className="gp-1"> 
										(<img className="res-el" src="img/wrong2.png" alt="" /> Forkert! <span>royal</span> er et tillægsord)
									</span>
								</strong> town of Segovia. The competition was
								<strong onClick={(e) => {this.onChange(e)}}> tough
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>tough</span> er et tillægsord.)
									</span> 
								</strong>, and the conductor was
                                <strong onClick={(e) => {this.onChange(e, 1)}}> very
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong>
                                <strong onClick={(e) => {this.onChange(e)}}> nervous
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>nervous</span> er et tillægsord.)
									</span> 
								</strong>. He thought that they could
                                <strong onClick={(e) => {this.onChange(e, 1)}}> only
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong> win if they performed
                                <strong onClick={(e) => {this.onChange(e, 1)}}> extraordinarily
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong>
                                <strong onClick={(e) => {this.onChange(e, 1)}}> brilliantly
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong>.
								<br/>
								<br/>
								My <strong onClick={(e) => {this.onChange(e)}}> fine
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>fine</span> er et tillægsord.)
									</span> 
								</strong> friend therefore suggested that they should buy a
								<strong onClick={(e) => {this.onChange(e)}}> huge
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>huge</span> er et tillægsord.)
									</span> 
								</strong> canvas, which they could hang behind the band during the concert. She would paint the canvas with
								<strong onClick={(e) => {this.onChange(e, 1)}}> typically
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong> Danish motives: A
								<strong onClick={(e) => {this.onChange(e)}}> Danish
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>Danish</span> er et tillægsord.)
									</span> 
								</strong> flag fluttering in the wind, the
								<strong onClick={(e) => {this.onChange(e, 1)}}> amazingly
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong>
								<strong onClick={(e) => {this.onChange(e)}}> beautiful
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>beautiful</span> er et tillægsord.)
									</span> 
								</strong> bridge between Funen and Zealand, cows
								<strong onClick={(e) => {this.onChange(e, 1)}}> lazily
									<span className="gp-1"> 
										(<img className="res-el" src="img/right2.png" alt="" />)
									</span>
								</strong> grazing in a summer field, and the Queen’s soldiers
								<strong onClick={(e) => {this.onChange(e, 1)}}> proudly
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span> 
								</strong> parading in front of Amalienborg Castle.
                                <br/>
                                <br/>
                                They got the canvas, and with a little help my friend managed to complete a <strong onClick={(e) => {this.onChange(e, 1)}}> really
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span> 
								</strong>
                                <strong onClick={(e) => {this.onChange(e)}}> fantastic
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>fantastic</span> er et tillægsord.)
									</span> 
								</strong> result in just one
                                <strong onClick={(e) => {this.onChange(e)}}> busy
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>busy</span> er et tillægsord.)
									</span> 
								</strong> evening and a little of the night.
                                <br/>
                                <br/>
                                The concert became an <strong onClick={(e) => {this.onChange(e)}}> unforgettable
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>unforgettable</span> er et tillægsord.)
									</span> 
								</strong> event. Everyone played the best they had
                                <strong onClick={(e) => {this.onChange(e, 1)}}> ever
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span> 
								</strong> done, and the
                                <strong onClick={(e) => {this.onChange(e)}}> colourful
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>colourful</span> er et tillægsord.)
									</span> 
								</strong>,
                                <strong onClick={(e) => {this.onChange(e)}}> artistic
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>artistic</span> er et tillægsord.)
									</span> 
								</strong> picture behind the band, supplemented the music so
                                <strong onClick={(e) => {this.onChange(e, 1)}}> well
									<span className="gp-1">
										(<img className="res-el" src="img/right2.png" alt=""  />)
									</span> 
								</strong>.
                                <br/>
                                <br/>
                                Later that evening, at a <strong onClick={(e) => {this.onChange(e)}}> swell
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>swell</span> er et tillægsord.)
									</span> 
								</strong> party, a very
                                <strong onClick={(e) => {this.onChange(e)}}> happy
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>happy</span> er et tillægsord.)
									</span> 
								</strong> conductor got an
                                <strong onClick={(e) => {this.onChange(e)}}> ugly
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>ugly</span> er et tillægsord.)
									</span> 
								</strong> trophy. The band had won the
                                <strong onClick={(e) => {this.onChange(e)}}> increadible
									<span className="gp-1">
										(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>increadible</span> er et tillægsord.)
									</span> 
								</strong> competition.
								{isFinish ? <div className="test-result">Du er nu færdig med opgaven. Du havde {this.state.rightAnswers} rigtige ud af {this.state.answersLength}</div> : <div></div>}
							</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Blue2Chapter13;