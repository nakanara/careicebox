import React from 'react';
import './App.css';
import {Container, Row} from 'react-bootstrap';
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
          <Footer />
        </div>
      </Row>

    </Container>
    
  );
}

export default App;
