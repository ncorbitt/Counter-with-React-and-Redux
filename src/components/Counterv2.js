import React from 'react';
import './Counter.css'
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';




const Counter = ({ count, onDecrement, onIncrement, onUpdate, onGetUpdate, trackedIncrementedClicks, trackedDecrementedClicks}) => {

    let textInput = React.createRef();
    
    function clearInputAndUpdate(){
      console.log('CLEAR_INPUT_VALUE')
      textInput.current.value = ''
      
      onGetUpdate()
    }

    return (
      <Container id='container'>
        <Row className='py-3'>
            <Col className='mt-3 border-right' >             
                <h4 id='click-header'>Decrement Clicks</h4> 
                <p>{trackedDecrementedClicks}</p>        
            </Col>
            <Col className='mt-3' >
                <h4 id='click-header'>Increment Clicks</h4>
                <p>{trackedIncrementedClicks}</p>          
            </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>        

          <Col  xs md={12} lg={8} className=''>
              
              <div className='text-center'>
                <Button variant='outline-dark'  disabled={ count <= parseInt(-9999) } onClick={onDecrement}>-</Button>
                  <span id='counter'>{count}</span>
                <Button variant='outline-dark' disabled={ count >= parseInt(9999) }onClick={onIncrement}>+</Button>
              </div>

              <div className='mb-5 shadow' id='info'>
                <p>
                  <span id='verb'>Increase</span> or <span id='verb'>Decrease</span> the counter using the respective buttons.
                </p>
                <p>
                  Use the, <span id='verb'>Update Counter</span>, to change the counter variable.
                </p>
              </div>

              <InputGroup className='shadow mb-4' size='lg'>

                <InputGroup.Prepend>
                  <InputGroup.Text id='update-counter' style={{backgroundColor:'#003366',color:'white'}}>
                    Update Counter
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                  ref={textInput} 
                  aria-label="Update counter variable"
                  onChange={event => onUpdate(event.target.value) }
                  onKeyPress={ event => event.key === 'Enter'? clearInputAndUpdate(): '' }
                />

                <InputGroup.Append>
                  <Button onClick={ () => clearInputAndUpdate() } variant="outline-dark">+</Button>
                </InputGroup.Append>

              </InputGroup> 

          </Col>
        </Row>
      </Container>
    );
}


export default Counter;