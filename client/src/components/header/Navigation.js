import React from 'react';
import { NavLink} from 'react-router-dom'


const Navigation  = () => {
    return (
        <div className="navBar">
       
            <ul style={{ display:'flex', listStyle:'none', margin:'50px', position:'relative'}}>
            <NavLink  to="/" >
                <li className="rondeur" >Accueil</li>
            </NavLink>

            <NavLink   to="/formations">
                <li className="rondeur">Formation</li>
            </NavLink>

            <NavLink  to="/contact">
                <li className="rondeur">Contact</li>
            </NavLink>
           <input className = "headersearchBar" type="text" placeholder="Votre recherche.." />
            </ul>
        </div>
    )
}

export default Navigation;