import React from "react";
import {Link} from 'react-router-dom';

const SubCard = (props) => {
  return (
    <Link to = "/view">
    <div className="card" style={{ width: "15rem", height: "3rem",marginTop : '5px', border : '1px solid black' }}>
      <div className="card-body">
        <h6 className="card-title" style = {{color : 'black'}}>{props.title}</h6>
      </div>
    </div>
    </Link>
    
  );
};

export default SubCard;
