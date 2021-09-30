import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../header/Header';



const Contact  = () => {
    let history = useHistory();
    return (
        <div>
                <Header/>

          <h1> SECTION CONTACT  </h1>
            <button 
            onClick={() =>history.push('/')} style={{borderRadius:'30px'}}>
            Retour à l'accueil</button>
        </div>
    )
}

export default Contact;