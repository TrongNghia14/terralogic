import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="box">
        <div className="img">
          <img src={this.props.src} />
        </div>
        <div className="text">
          <div className="content">{this.props.content}</div>
          <div className="number" style={{ color: this.props.color }}>
            {this.props.number}
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
