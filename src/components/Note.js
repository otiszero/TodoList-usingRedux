import React from "react";

export default class Note extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button {...this.props}>Delete</button>
      </div>
    );
  }
}
