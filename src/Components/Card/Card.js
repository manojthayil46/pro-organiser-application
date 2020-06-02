import React, { Component } from "react";
import SubCard from "../SubCard/SubCard";
import SubCardModal from "../../Pages/SubCardModal/SubCardModal";
import Styles from '../Card/Card.module.css'

class Card extends Component {

    state = {
        modalFlag : false,
        title : '',
        description : '',
        due_date : '',
        change : [],
        
    }


    closeModal = () =>{
      this.setState({
        modalFlag : false
      })

  
    }

    

//When the button add a card inside a column is clicked this function is called and which in turns shows up a modal
     clickHandler = ()=>{
         this.setState({
             modalFlag : true
         })

    }
//This is used to handle the form submit  where it stores the subcard in array and displays in the render method 
    formButtonHandler = (element) =>{
    element = <SubCard title = {this.state.title} />  
    this.setState({
        change: this.state.change.concat(element),
        modalFlag : false


        })
    }


    handleInput = (event) =>{
        
        let value = event.target.value;
        if(event.target.name === "title"){
            this.setState({
                title : value

            });
        }

        else if(event.target.name === "description"){
            this.setState({
                description : value
            });
        }

        else if(event.target.name === "due_date"){
            this.setState({
                due_date : value
            });
        
        }

    }
    //This return a Card along with subcards to the BoardDetails component
  render() {
    return (
      <div>
        <div className={Styles.card}>
          <div className="card-body">
            <h5 className="card-title">{this.props.column_name}</h5>
            {this.state.change}
            <br></br>
            <button type="button" class="btn btn-primary btn-lg" style = {{width : "15rem"}} onClick={this.clickHandler}>Add a card</button>
            

            {this.state.modalFlag ? <SubCardModal handleInput = {this.handleInput} formButtonHandler= {this.formButtonHandler} close = {this.closeModal}/> : null}
        
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
