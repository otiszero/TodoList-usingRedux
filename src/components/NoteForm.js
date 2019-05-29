import React from "react";
import {connect} from 'react-redux';

class NoteForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch({type: 'ADD_ITEM', item: this.refs.txt.value});
    dispatch({type: "TOGGLE"});
  };

  toggle = () => {
    const {dispatch} = this.props;
    dispatch({type: "TOGGLE"});
  }

  render() {
    if (this.props.isAdding)
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="..." ref="txt" />
          <button>Add</button>
        </form>
      );
    return <button onClick={this.toggle}>+</button>;
  }
}

export default connect(function(state){
  return {isAdding: state.isAdding}
})(NoteForm); 