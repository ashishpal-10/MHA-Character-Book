import React from "react";
// import CharacterCard from "./CharacterCard";
import Skill from "./Skill.jsx"
import character from "../../data/Character.js";
import Styles from "./Skill.module.css";
import { useNavigate } from "react-router-dom";



const CharacterList = () => {
     const navigate = useNavigate();
  return (
    <div className={Styles.cardGrid}>

            <div className="flex items-center justify-around">
            <h1>Characters</h1>
                <button 
            onClick={() =>navigate("/")}
            className="px-8 py-2 mt-4 text-orange-400 font-bold rounded-xl text-2xl border-2 border-black hover:text-white hover:bg-orange-400">Home</button>
            </div>
        <div className={Styles.box}>
      {character.map((character) => (
          <Skill
          key={character.id}
          name={character.name}
          japaneseName={character.japaneseName}
          image={character.image}
          background={character.background}
          />
        ))}
    </div>
    
        </div>
  );
};

export default CharacterList;