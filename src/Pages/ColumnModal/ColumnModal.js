import React from 'react';
import Styles from './ColumnModal.module.css';


const Column = props => {


    
    return (

        <div>
            
        <div className = {Styles.Outer_Card} >
         <form>
         <label htmlFor="name"><strong>Enter a column name</strong></label> : <input id='column_name' type='text' name = 'column_input' placeholder='Enter column name'  onChange={props.handleInput}></input>
         </form>
         <button type="button" class="btn btn-primary" id='CreateColumn' onClick={props.addColumn}>Add Column</button>
         <button type="button" class="btn btn-danger" id='CloseModal' style ={{marginLeft : '5px'}} onClick={props.close}>Close</button>
         
         </div>
        </div>
    );
    
    
};



export default Column;