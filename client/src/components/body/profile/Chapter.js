import React from "react";
import Session from './Session';

const Chapter = () => {
  return (
    <div className="the-chapter">
      <div className="the-chapter-info">
        <h5> Chapitre</h5>
        <input
          type="text"
          className="chapter-title"
          placeholder="titre du chapitre"
        />
      </div>
      <Session/>
    </div>
  );
};

export default Chapter;
