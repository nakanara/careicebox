import React from 'react';
import './App.css';
import {Container, Row} from 'react-bootstrap';
import Watch from './module/Watch';
import FoodHistory from './frame/FoodHistory';
import Footer from './frame/Footer';


function App() {

  
  return (
    <Container>
      <Row>
        <div className="App">
          <header className="App-header">        
            <h3>Take Care IceBox</h3>
          </header>      

          <div>
            <h3>Hello</h3>
          </div>
          <Watch />
          <FoodHistory />
          <Footer />
        </div>
      </Row>

    </Container>
    
  );
}

export default App;
