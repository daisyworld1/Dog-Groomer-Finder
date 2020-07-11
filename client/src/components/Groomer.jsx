import React from 'react';
import $ from 'jquery';

class Groomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
    this.checkoutButtonClick = this.checkoutButtonClick.bind(this);
   }

  onButtonClick(e){
    e.preventDefault();
    $.post("/create",
    info,
    function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      this.setState({info: data});
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Groomers Portal</h1>
        <button onClick={this.onButtonClick}>Add my info!</button>
      </div>
    );
  }
}