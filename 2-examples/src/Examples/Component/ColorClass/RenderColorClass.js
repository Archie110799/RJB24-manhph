import React, { Component } from "react";

export default class RenderColorClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ border: "1px solid #ccc" }}>
        <p style={{ color: this.props?.color?.name }}>{this.props?.input?.name}</p>
      </div>
    );
  }
}
