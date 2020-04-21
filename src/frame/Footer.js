import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import './Footer.css';

function Footer(){

  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
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



// <div className="row menuBar">
// {/* today food list */}
// <div className="col-sm-4 menu-item">LIST</div> 
// {/* add auto reg and self add */}
// <div className="col-sm-4 menu-item">Camera</div>
// {/* today recommand foods */}
// <div className="col-sm-4 menu-item">Recommand</div>        
// </div>
export default Footer;