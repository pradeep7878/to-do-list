// Simple Exercise==================================================


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const Content = () =>  {

//      const handleNameChange = () => {
//         const names = ['Earn','Grow','Give'];
//         const int =  Math.floor(Math.random()*3);
//         // console.log(names[int]);
//         return names[int];

//     }

//     const [ini,setIni] = useState('Earn');

//     const handleChange = () => {
//         const names2 = ['Earn','Grow','Give'];
//         const int2 =  Math.floor(Math.random()*3);
//         setIni(names2[int2]);
//     }

//     return(
//         <main>
//             <h2>Lets <span style={{color:'blue'}}>{ini}</span> money</h2>
//             <button onClick={() => handleChange()}>Subscribe</button>
//         </main>
//     ) 
// }

// export default Content;











// List and Keys=====================================================

import React from 'react';
import ItemsList from './ItemsList';

const Content = ({items,handleCheck,handleDelete}) => {

    return(
        <main>

        {items.length > 0 ?  (
            <ItemsList
                items = {items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
            ) :
                
            <p>List is Empty</p>

            }


        </main>
    )

}

export default Content;






