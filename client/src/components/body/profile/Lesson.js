import React, { useState } from "react";
import "../../../assets/css/user.css";
import   Chapter from "./Chapter";
import { v4 as uuidv4 } from 'uuid';

const Lesson = () => {
  const [counter, setCounter] = useState(1);
  const [lesson, setLesson] = useState(true);
  const [inputFields, setInputFields] = useState([{}])

  const lessonShow = () => {
    setLesson(!lesson);
  };

  
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4()}])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  return (
   <form action="">
    { inputFields.map(inputField => (
      <div key={inputField.id}>
          <div className="the-lesson">
     
     <div className="the-lesson-details">
       <details className="details-desc">
         <summary>Description</summary>
         <div className="contenu-desc">
           <p>
             Mais c’est surtout intéressant pour garder La modification de
             cette variable ne déclenchera pas de nouveau rendu. Dans cette
             exemple, I don't want to call handleChange only if the button
             has been clicked. It has nothing to do with handleClick. I gave
             an example in the @shubhakhatri answer's comment. l’affichage du
             compteur restera à 0. De même, si des effets étaient en place,
             aucun d’entre eux ne se déclencheraient. une variable modifiable
             qui peut être utilisée sans influencer le reste du comportement.
           </p>
         </div>
       </details>

       {/**Titre de la lecon */}
       <h3>Chapitre {counter} </h3>
       <button className="" onClick={lessonShow}>
         Contenu
       </button>
     </div>
     {lesson ? null : (
       <div className="title-subtitle-desc">
         <input
           className="lesson-title"
           type="text"
           value=""
           placeholder="lessson title"
         />
         <input
           className="lesson-subtitle"
           type="text"
           value=""
           placeholder="lessson subtitle"
         />
         <textarea
           className="lesson-desc"
           name=""
           id=""
           cols="40"
           rows="3"
           placeholder="Ici la description du cours"
         ></textarea>
       </div>
     )}
   
    <Chapter />
   </div>
   {/** Button de suppression ajout */}
   <div className="add-remove">
   <button type="button" class="btn btn-primary"    onClick={()=>{ handleAddFields(); incrementCounter()}}>Ajouter une lecon </button>
   <button type="button" class="btn btn-success" onClick={() =>{ handleRemoveFields(); decrementCounter()}}>Supprimer une lecon</button>
   </div>

        </div>
        ))}
    
    </form>
  );
};

export default Lesson;
