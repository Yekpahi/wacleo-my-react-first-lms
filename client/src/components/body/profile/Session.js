import React from 'react'


const  Session =() =>{
    return (
        <div className="the-session">
        <h4>Session</h4>
        <input
          type="text"
          className="session-title"
          placeholder="Titre de la session"
        />
        <ul className="ul-input-file">
          <input type="file" name="" id="" />
          <input type="file" name="" id="" />
        </ul>
        <ul className="ul-textarea">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </ul>
      </div>
    )
}

export default Session;

