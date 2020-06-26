import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Watch Component
 */
class Watch extends React.Component {
  
  constructor(porps){
    super(porps);
    this.state = {
      date:new Date(),
      isStart:true,      
    };

    this.stopClock = this.stopClock.bind(this);
    this.startClock = this.startClock.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {    
    this.setState({
      date: new Date()      
    });


  }

  stopClock(){
    /**
     * 타이머 시작
     */

    if(!this.state.isStart) return;

    clearInterval(this.timerID);
    this.setState({
      isStart:false 
    });
  }

  startClock(){

    if(this.state.isStart) return;

    this.tick();

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    this.setState({
      isStart:true 
    });
  }



  render(){
    return(
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <div><FormattedDate date={this.state.date} /> </div>
        
        <h2>isStart {this.state.isStart? 'ON':'OFF'}</h2>

        <Button variant="primary" onClick={this.startClock }>Start</Button>{' '}
        <Button variant="primary" onClick={this.stopClock }>Stop</Button>{' '}

      </div>
    )
  }
}

export default Watch;


function FormattedDate(props) {  
  return <h2>cur~It is {props.date.toLocaleTimeString()}.</h2>;
}