import React, { Component } from 'react';
import {
    Form
} from 'react-bootstrap'


class Grid extends Component {

    state ={
        value: ''
    }

    sendData = () => {
        if (this.state.value === this.props.correctValue){
            // create copy array of current state
            const arrData = this.props.arrValue
            // grab the index
            const modifiedIndex = Number(this.props.gridId)
            // modified the value
            arrData[modifiedIndex] = 1
            this.props.parentCallback(`True`, arrData);

        }
        else {
            // create copy array of current state
            const arrData = this.props.arrValue
            const modifiedIndex = Number(this.props.gridId)
            arrData[modifiedIndex] = 0
            this.props.parentCallback("Wrong", arrData);
        }
        
    }

    handleInput = (event) => {
        // to focus on the next input form
        const val = event.target.value
        const name = event.target.name
        const fieldIndex = name.split("-")[1];
        // console.log('fieldIndex is')
        // console.log(fieldIndex)

        // check if hit max char
        if (val.length >= 1){
            
            // check if it's not the last input -- no need for my purpose
            
            // get the next input field
            var nextSibling = document.querySelector(`input[name=grid-${parseInt(fieldIndex, 10) + 1}]`);
            // console.log('nextSibling is ', nextSibling)
            
            // if found, focus to nextSibling -> an error handler
            if ((nextSibling !== undefined) & (nextSibling !== null)){
                nextSibling.focus()
            }
        }

        this.setState({
          value: event.target.value.toUpperCase()
        }, ()=> {
            this.sendData()
        })
      }

    render() {

        return (
            <div style={{marginTop: '10px', marginLeft:'10px', marginRight: '10px'}}>
                <Form>
                    <Form.Control name = {this.props.gridName} maxLength={1} style={{width:'40px', opacity:this.props.opac}} placeholder={this.props.placeHolderValue} onChange={this.handleInput}/>
                </Form>
            </div>
        );

    }
    
}

export default Grid;
