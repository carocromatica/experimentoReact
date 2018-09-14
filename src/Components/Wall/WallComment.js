import React, { Component } from 'react';
import Comentario from './PrintComment';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

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

               <Button variant="contained" color="primary" type="submit">
addComment
    </Button>
           
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
    console.log(this.state.items); // pasar a map?
    

  }

  // render(){
  //   return(
  //     <div className="Container">
  //       {this.state.items.bind(this).map((comment) => (
  //         <Comentario texto={comment.text}/>
  //       ))}
  //     </div>
  //   )
  // }



 


};

export default WallComments;
