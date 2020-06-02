import React from "react";
import Styles from "../SubCardModal/SubCardModal.module.css";
const SubcardModal = (props) => {
  return (
    <div>
      <div className={Styles.subCard}>
        <h2>Add Card</h2>
        <br />
        <br />
        <form>
          <label htmlFor="name">
            {" "}
            <strong>Enter a title for your task</strong>
          </label>
          <br></br>
          <input
            id="title"
            type="text"
            placeholder="Enter a Title"
            name="title"
            onChange={props.handleInput}
          ></input><br></br>
          <label htmlFor="name">
            <strong>
              Choose members for this task(select multiple , if needed)
            </strong>
          </label><br></br>
          <select class="mdb-select colorful-select dropdown-primary md-form" multiple searchable="Search here..">
                   <option value="" disabled selected>Choose your country</option>
                   <option value="1">Manoj</option>
                   <option value="2">Amar</option>
                   <option value="3">Akash</option>
     
    </select><br></br>
          <label htmlFor="name">
            <strong>Add the description for your task</strong>
          </label>
          <br></br>
          <input
            id="description"
            type="text"
            placeholder="Enter a description"
            name="description"
            onChange={props.handleInput}
          ></input>
          <br />
          <br />
          <label htmlFor="name">
            <strong>Select the due date for this task</strong>
          </label>
          <br></br>
          <input
            type="date"
            id="due_date"
            name="due_date"
            onChange={props.handleInput}
          ></input>{" "}
          <br />
          <br />
        </form>

        <button
          type="button"
          className="btn btn-primary"
          id="CreateCard"
          onClick={props.formButtonHandler}
        >
          Add Card
        </button>
        <button type="button" class="btn btn-danger" id='CloseModal' style ={{marginLeft : '5px'}} onClick={props.close}>Close</button>
      </div>
    </div>
  );
};

export default SubcardModal;
