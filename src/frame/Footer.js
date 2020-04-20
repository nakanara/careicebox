import React from 'react';
import './Footer.css';

function Footer(){

  return (
    <div>
      <footer>
        <div className="row menuBar">
          {/* today food list */}
          <div className="col-sm-4 menu-item">LIST</div> 
          {/* add auto reg and self add */}
          <div className="col-sm-4 menu-item">Camera</div>
          {/* today recommand foods */}
          <div className="col-sm-4 menu-item">Recommand</div>        
        </div>                  
      </footer>
    </div>
  )

}


export default Footer;