import React, { Component } from 'react';
import './Board.css';
import axios from 'axios';



class Board extends Component {

    state = {
        name : '',
        team : '',
        type : ''
    }

    //This function will post the data to firebase and redirect to / 
   myBoardHandler = () =>{
       axios.post('https://team-collaboration-app.firebaseio.com/Board-information.json',this.state).then(Response =>{
           
           this.props.history.replace('/');
       });


    }

    //This function will handle the form inputs and sets state accordingly
    inputHandler = (event) =>{
        let value = event.target.value;
        if(event.target.name ==="Name"){
            this.setState({
                name : value
            });

        }

        else if(event.target.name === "Team"){
            this.setState({
                team : value
            });

        }


        else if(event.target.name === "Type"){
            this.setState({
                type : value
            })

        }

    }
    render() {
        return (
            <div className="form-class">
                <form>
                    <label htmlFor='Name'><strong>Enter a name for your board</strong></label><br></br>
                    <input type ="text" id= "name" name= "Name" placeholder="e.g Agile Sprint Board" onChange = {this.inputHandler}/><br></br>
                    <label htmlFor='Team'><strong>Add your team members</strong></label><br></br>
                    <input type = "text" id = "team" name="Team" placeholder = "Add your team (separated by commas)"onChange = {this.inputHandler} /><br></br>
                    <label htmlFor='Type' id="team"><strong>Enter the type of your board</strong></label><br></br>
                    <input type="text" name="Type" id="type"  placeholder = "e.g Design UX" onChange = {this.inputHandler} />
                </form><br></br>
                <button type="button" class="btn btn-primary" id="CreateBoard" onClick = {this.myBoardHandler}>Create</button>
                
            </div>
        );
    }
}

export default Board;