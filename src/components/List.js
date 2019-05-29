import React from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <div>
        <NoteForm />
        {this.props.arr.map((item, index) => (
          <Note index={index} key={index}>
            {item}
          </Note>
        ))}
      </div>
    );
  }
}

export default connect(function(state) {
  return { arr: state.arr };
})(List);
