import React from 'react';
import ReactDOM from 'react-dom';

const Footer = ({length}) => {

    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <h5>{length} List {length>1 ? 'items' : 'item'}</h5>
            {/* <h4>Copyright &copy; {currentYear}</h4> */}
        </footer>
    )
}

export default Footer;