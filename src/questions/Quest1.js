import React, { Component } from 'react';
import Grid from '../cw/Grid'
import {
  Row, Container
} from 'react-bootstrap'
import {
    Icon
} from 'semantic-ui-react'

class Question1 extends Component {

    state={
        rowValue : '',
        message: '',
        arrayTrue: [0,0,0,0,0,0,0,0,0,0,0],
        arrayAnswer: [0,0,0,1,1,1,1,1,0,0,0],
        q1Correct: false,
        sendDone: false
    }

    handleChange = (event) => {
        this.setState({
            rowValue: event.target.value.toUpperCase()
          })
    }

    callbackFunction = (childData, arrData) => {
        this.setState({message: childData, arrayTrue: arrData, sendDone: false})
    }

    arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
    }

    sendCheckDataTrue = () => {
        // console.log("sending data to parent")
        // this.props.parGridBoxCallback(true)
        // change second argument for each question.
        this.props.parGridBoxCallback(1, 0)
        this.setState({sendDone: true})
    }

    // To-DO: send array number as well. modified parent state as array
    sendCheckDataFalse = () => {
        // console.log("sending data to parent")
        // this.props.parGridBoxCallback(false)
        this.props.parGridBoxCallback(0, 0)
        this.setState({sendDone: true})
    }

    // this is useful to handle sending data to parent.
    // trigger: check if the array is user answer == the actual asnwer
    // if true -> set state of sendDone (indication we already send data to parent) as true on 
    // sendCheckDataTrue to avoid infinity loop.
    // if else -> same as above , but send a different function
    // set sendDone as False on callbackFunction (means every onChange function, always set it to False)
    componentDidUpdate(){
        if (this.arrayEquals(this.state.arrayTrue, this.state.arrayAnswer)){
            // console.log('component did update run')
            if (this.state.sendDone === false){
                this.sendCheckDataTrue()
            }
        }

        if (!this.arrayEquals(this.state.arrayTrue, this.state.arrayAnswer)){
            // console.log('component did update NOT run')
            if (this.state.sendDone === false){
                this.sendCheckDataFalse()
            }
        }

    }

    
    render(){
        // console.log('GridBox rendered')
        // console.log('arrayTrue value is')
        // console.log(this.state.arrayTrue)

        const arrayAnswer = this.state.arrayAnswer
        // console.log('arrayAnswer is')
        // console.log(arrayAnswer)
        var finalAnswer = false

        if (this.arrayEquals(arrayAnswer, this.state.arrayTrue)){
            // console.log('final answer is CORRECT')
            finalAnswer = true
            // this.sendCheckData()
        }
        else {
            // console.log('final answer is wrong')
            finalAnswer = false
        }


        return (
            // <div>
             <Container>
                <Row style={{flexWrap:'nowrap'}}> 
                    Q1.
                  <Grid gridId = '0' gridName='grid-0' opac='0%' disabledGrid = {true}/>
                  <Grid gridId = '1' gridName='grid-1' opac='0%' disabledGrid = {true}/>
                  <Grid gridId = '2' gridName='grid-2' opac='0%' disabledGrid = {true}/>
                  <Grid gridId = '3' gridName='grid-3' parentCallback = {this.callbackFunction} correctValue = 'T' arrValue={this.state.arrayTrue}/>
                  <Grid gridId = '4' gridName='grid-4' parentCallback = {this.callbackFunction} correctValue = 'A' arrValue={this.state.arrayTrue}/>
                  <Grid gridId = '5' gridName='grid-5' parentCallback = {this.callbackFunction} correctValue = 'H' arrValue={this.state.arrayTrue}/>
                  <Grid gridId = '6' gridName='grid-6' parentCallback = {this.callbackFunction} correctValue = 'O' arrValue={this.state.arrayTrue}/>
                  <Grid gridId = '7' gridName='grid-7' parentCallback = {this.callbackFunction} correctValue = 'E' arrValue={this.state.arrayTrue}/>
                  <Grid gridId = '8' gridName='grid-8' opac='0%' disabledGrid = {true}/>
                  <Grid gridId = '9' gridName='grid-9' opac='0%' disabledGrid = {true}/>
                  <Grid gridId = '10' gridName='grid-10' opac='0%' disabledGrid = {true}/>
                  {finalAnswer ? <Icon name='check circle outline' color='green' size='large' style={{marginTop:'20px'}}/> : ''}
                </Row>
             </Container> 
            // </div>
          );
    }
  
}

export default Question1;
