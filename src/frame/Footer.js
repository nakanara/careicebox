import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './Footer.css';

function Footer(){

  return (
    <div>
      <footer>
        <Tabs>
          <Tab>LIST</Tab>
          <Tab>Camera</Tab>
          <Tab>ReCommmand</Tab>
        </Tabs>
        
      </footer>
                          
      
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