import React, { Component } from "react";

class control extends Component {
  createWarning(Name) {
    console.warn(Name + "is not define");
  }

  onPlus = () => {
    this.createWarning("onPlus");
  };
  onSubtract = () => {
    this.createWarning("onSubtract");
  };
  onRandomizeColor = () => {
    this.createWarning("onRandomizeColor");
  };

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}

export default control;
