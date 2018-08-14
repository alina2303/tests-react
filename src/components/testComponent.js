import React, { Component } from 'react';


class TestComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rightAnswers: 0,
			wrongAnswers: 0,
			answersLength: 9
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


	renderTest() { 
		const isFinish = this.state.rightAnswers + this.state.wrongAnswers === this.state.answersLength;
		
		return(
		<div className={isFinish ? "form-group disabled-click" : "form-group"} id="7086541136608">
			When Churchill 
			<strong onClick={(e) => {this.onChange(e)}}> became 
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""/>Forkert! <span>became</span> er et almindeligt udsagnsord.) 
				</span>
			</strong> Prime Minister in 1940, he was far from
			<strong onClick={(e) => {this.onChange(e)}}> convinced
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>convinced</span> er et almindeligt udsagnsord.)
				</span>
			</strong> that Britain 
			<strong onClick={(e) => {this.onChange(e, 1)}}> would
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> ever find the strength to beat Nazi Germany. However, he 
			<strong onClick={(e) => {this.onChange(e)}}> was
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>was</span> er her et almindeligt udsagnsord.)
				</span> 
			</strong> in two minds as to whether he
			<strong onClick={(e) => {this.onChange(e, 1)}}> should
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> let people 
			<strong onClick={(e) => {this.onChange(e)}}> know
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>know</span> et almindeligt udsagnsord.)
				</span> 
			</strong> about his doubts. If he did, the war
			<strong onClick={(e) => {this.onChange(e, 1)}}> would
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> certainly be lost. He therefore
			<strong onClick={(e) => {this.onChange(e, 1)}}> had to
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> focus on keeping up the fighting spirit of the British people.
			<br/>
			<br/>
			It was no easy task. Even his own Foreign Secretary, Halifax, <strong onClick={(e) => {this.onChange(e)}}> argued
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>argued</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> that they
			<strong onClick={(e) => {this.onChange(e, 1)}}> ought to
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> seek peace with Germany. If they did not, the country
			<strong onClick={(e) => {this.onChange(e, 1)}}> might
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> become part of Hitler’s “New Europe”, and
			<strong onClick={(e) => {this.onChange(e)}}> lose
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>lose</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> its independence.
			<br/>
			<br/>
			Churchill did not agree, and instead he <strong onClick={(e) => {this.onChange(e)}}> held
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>held</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> a speech in which he
			<strong onClick={(e) => {this.onChange(e)}}> used
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>used</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> the later so famous words: “we
			<strong onClick={(e) => {this.onChange(e, 1)}}> will
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> never surrender”. In spite of the odds, he
			<strong onClick={(e) => {this.onChange(e)}}> had
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>had</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> made up his mind: Britain
			<strong onClick={(e) => {this.onChange(e, 1)}}> could
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> only survive If she
			<strong onClick={(e) => {this.onChange(e)}}> kept
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>kept</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> on fighting. His hopes was to convince the American President to join Britain, and declare war on Germany. A lucky star
			<strong onClick={(e) => {this.onChange(e, 1)}}> must
				<span className="gp-1"> 
					(<img className="res-el" src="img/right2.png" alt="" />)
				</span>
			</strong> have shone on Churchill, because in December 1941, when Japan
			<strong onClick={(e) => {this.onChange(e)}}> attacked
				<span className="gp-1">
					(<img className="res-el" src="img/wrong2.png" alt=""  /> Forkert! <span>attacked</span> er et almindeligt udsagnsord.)
				</span> 
			</strong> America, Hitler himself declared war on America.
			{isFinish ? (<div className="test-result">Du er nu færdig med opgaven. Du havde {this.state.rightAnswers} rigtige ud af {this.state.answersLength}</div>) : <div></div>}	
		</div>
		)
	}

	render() {	
		return (
			<div className="App">
				<div className="border-blue-ex">
					<div className="bott-block" id="bott-block">
						<div className="head">
							<h5> 
								I teksten er nogle udsagnsord fremhævet med fed. Klik på dem som er/fungerer som mådesudsagnsord. (9 klik, max 9 point)
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
						{this.renderTest()}
					</div>
				</div>
			</div>
		);
	}
}

export default TestComponent;
