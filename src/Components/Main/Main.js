import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';
import Board from '../Board/Board';
import BoardPage from '../BoardPage/BoardPage';
import BoardDetails from '../BoardDetails/BoardDetails';
import Styles from '../Main/Main.module.css';

class Main extends Component {
    render() {
        return (
            <>
            <div className = {Styles.topnav}>
            
                <h3 className = {Styles.proorganizer}>Pro-Organizer</h3>
            
            <div>
                 <NavLink to = "/createboard" className={Styles.myNav}>create a board</NavLink>          
                 <NavLink to = "/" className={Styles.myNav}>Home</NavLink>
            </div>
            </div>
            <switch>
            <Route path = '/' exact component={BoardPage} />
            <Route path="/createboard" component = {Board} />
            <Route path = '/:name/:id' component = {BoardDetails}/>
            
            </switch>

            </>
         
        );
    }
}

export default Main;