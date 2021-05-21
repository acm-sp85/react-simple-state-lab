import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        } 
      }

      changeColor = () =>{

        console.log("H")
        this.setState({
            color:  '#333'
          });
      }

      render() {

        let theColor = this.state.color
    return (


      <div className="cell" style={{backgroundColor: `${theColor}`}} onClick={this.changeColor}>
      </div>

    )
  }
}
