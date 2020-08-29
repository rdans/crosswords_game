import React, { Component } from 'react';
import {
  Row, Container
//   ,Col
} from 'react-bootstrap'
import Question1 from '../questions/Quest1.js'
import Question2 from '../questions/Quest2.js'
import Question3 from '../questions/Quest3.js'
import Question4 from '../questions/Quest4.js'
import Question5 from '../questions/Quest5.js'
import Question6 from '../questions/Quest6.js'
import Question7 from '../questions/Quest7.js'
import Question8 from '../questions/Quest8.js'
import Question9 from '../questions/Quest9.js'

class GridBoxes extends Component {

    state = {
      arrayAllQuestion: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    
    // TO-DO : modified state as array, instead of true false
    handleCallBack = (childData, index) => {
      const currArray = this.state.arrayAllQuestion
      currArray[index] = childData
      console.log('currArray is ... ')
      console.log(currArray)
      this.setState({arrayAllQuestion: currArray})
    }
    
    render(){
        return (

              <Container>
                {/* <div style={{height:'300px', overflowX: 'auto', overflowY:'auto'}}> */}
                <Row >
                    <Question1 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question2 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question3 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question4 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question5 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question6 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question7 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question8 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                    <Question9 parGridBoxCallback = {this.handleCallBack}/>
                </Row>
                <Row>
                  {this.state.arrayAllQuestion}
                
                </Row>
                {/* </div>    */}

              </Container>

          );
    }
  
}

export default GridBoxes;
