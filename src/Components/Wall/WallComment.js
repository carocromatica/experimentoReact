import React, { Component } from 'react';

class WallComments extends Component {

  constructor() {
    super();
    this.state = {// Guardar los elementos
      items: []
    }
    console.log(this.state)
    this.addComment = this.addComment.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addComment}>
            <input placeholder="comment..." ref={(input) => this.textInput = input}/>
            <button type="submit">Add comment</button>
          </form>
        </div>
      </div>
    )
  };
  // recibe el evento
  addComment(event) {
    event.preventDefault();
    if (this.textInput.value === '') {// caso vacio 
      return;
    }

    let newItem = {
      text: this.textInput.value,
      key: Date.now()
    }

    this.setState((previousState) => {
      return {
        items: previousState.items.concat(newItem),
      }
    })
    // Referencia al input
    this.textInput.value = '';
    console.log(this.state.items)
  }


};

export default WallComments;
