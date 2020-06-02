import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from '../BoardPage/BoardPage.module.css';


const BoardPage = (props) => {
  const [data, setData] = useState([]);



  useEffect(() => {
    //This function will get the information from firebase and set in the data if nothing found setData = null
    axios
      .get("https://team-collaboration-app.firebaseio.com/Board-information.json")
      .then((response) => {
        if (response.data != null) {
          console.log(response);
          const data = response.data;
          const myEntries = Object.entries(data);
          setData(myEntries);
        } else setData(null);
      });
  });


  //If no boards were found in the firebase  if condition would be triggered otherwise else condition

  if (data == null)
    return (
      <h5 className = {Styles.no_boards}>
        You haven't created any boards. Kindly click on the 'Create Board'
        button in the navigation bar to create a board.
      </h5>
    );

    
  else {
      //onclick of a board would redirect to localhost:3000/BoardName/key. Main.js would handle this and call boardDetails.js
      const boardClickHandler = (key, name) => {
      props.history.push({ pathname: name + "/" + key });
    }

    return (
      <div className={Styles.card}>
        {data.map((value) => {
          return (
            <li
              className={Styles.Post}
              key={value[0]}
              onClick={() => boardClickHandler(value[0], value[1].name)}
            >
              {value[1].name}
            </li>
          );
        })}
      </div>
    );
  }
};

export default BoardPage;
