import React from "react";
import {Link} from 'react-router-dom';
import './Home.css'
import TypingText from "./TypeScriptEffect";
import RedirectButton from "../../components/RedirectButton";

const Home = () =>{
    return (
        <div className="mainContainer">
            <TypingText text=">BICHIU RAZVAN-ANDREI" className="textStyle"/>
            <div className="buttonContainer">
                <RedirectButton to='/about' className='buttonStyle'>>About me</RedirectButton>
            </div>
        </div>
    );
}
export default Home;