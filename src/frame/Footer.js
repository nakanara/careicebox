import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component{

  constructor(porps){
    super(porps);
    let uuid = ( '' + Math.random() ).replace( /\D/g, "" );

    this.state = {
      uuid: uuid,
      switchFlag:false,
    }
  }

  fnClickMe2(){
    console.log('fnClickMe click');
  }

  fnClickMe = () => {
    console.log('fnClickMe2 click');

    this.setState({
      switchFlag: !this.state.switchFlag
    });
  }


  
  render(){
    
    return (
      <div>        

        <Greeting isLoggedIn={this.state.switchFlag}/>
        <Button variant="primary" onClick={this.fnClickMe2}>ClickMe2</Button>{' '}
        <Button variant="secondary" onClick={() => this.fnClickMe() }>{this.state.switchFlag?"ON":"OFF"}</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
        <div className='row'>
          <Tabs>
            <Tab>LIST</Tab>
            <Tab>Camera</Tab>
            <Tab>ReCommmand</Tab>
          </Tabs>
          
        </div>                            
        
      </div>
    )
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}


// <div className="row menuBar">
// {/* today food list */}
// <div className="col-sm-4 menu-item">LIST</div> 
// {/* add auto reg and self add */}
// <div className="col-sm-4 menu-item">Camera</div>
// {/* today recommand foods */}
// <div className="col-sm-4 menu-item">Recommand</div>        
// </div>
export default Footer;