import React from'react';
import ReactDOM from 'react-dom';

function Header(props){
    return(
        <header>
            <h2>{props.title}</h2>
        </header>
    )
}

Header.defaultProps = {                     //This will be default if there is no prop passes
    title : "To Do App"
}

export default Header;

