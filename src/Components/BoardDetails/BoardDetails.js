import React, { Component } from 'react';
import Card from '../Card/Card.js';
import axios from 'axios';
import ColumnModal from '../../Pages/ColumnModal/ColumnModal.js';
import Styles from '../BoardDetails/BoardDetails.module.css';


class BoardDetails extends Component {
  
       state = {
            showModal : false,
            column_input : '',
            change : []
        }


//whenever Add a column is clicked this fuction is called and this sets the modal to show up
    columnHandler = ()=>{
        this.setState({
            showModal : true
        })
                          

    }

    handleInput = (event)=>{
        let val = event.target.value;
       
        if(event.target.name === 'column_input'){
             this.setState({
                 column_input : val
             })
        }
    }

//This is handling the addColumn functionality.The column name is passed to functional component "card" which return the card
    addColumn = (element) => {
      console.log("This is board id" + this.props.match.params.id);
      
      fetch(`https://team-collaboration-app.firebaseio.com/Board-information/${this.props.match.params.id}.json`,{mode : "no-cors",body :  JSON.stringify({column_name : this.state.column_input}),method : 'POST'});
      element = <Card column_name = {this.state.column_input} />  
    
      this.setState({
        change: this.state.change.concat(element),
        showModal : false
    });
        
    }

//This is used to handle the delete board functionality 
     DeleteHandler = () => {
        axios.delete(`https://team-collaboration-app.firebaseio.com/Board-information/${this.props.match.params.id}.json`).then(
            this.props.history.replace('/')
        );
        

    }

    closeModal = () =>{
      this.setState({
        showModal : false
      })

  
    }

    render() {
        return (
          <>
            <div className= {Styles.Delete_Board} >
              <h3 style={{ color: "blue" }}>{this.props.match.params.name}</h3>
              <button
                type="button"
                class="btn btn-danger"
                onClick={this.DeleteHandler}>
                Delete Board
              </button>
            </div>

            <div className={Styles.BoardDetails}>
              {this.state.change}

              {this.state.showModal ? (
                <ColumnModal
                  addColumn={this.addColumn}
                  handleInput={this.handleInput}
                  close = {this.closeModal}
                />
              ) : null}
              <button className={Styles.formbtn} onClick={this.columnHandler}>Add a column</button>
            </div>
          </>
        );
    }
}

export default BoardDetails;