import React, { Component } from "react";

class Value extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
// Value.defaultProps = defaultProps;
export default Value;
