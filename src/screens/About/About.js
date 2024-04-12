import React from "react";

import './About.css'
import RedirectButton from "../../components/RedirectButton";
import TypingText from "../Home/TypeScriptEffect";

const About = () =>{
    return (
        <div className='parentContainer'>
            <RedirectButton to='/' className='redirectButtonHome'>>Home</RedirectButton>
            <div className='containerMain'>
                <TypingText text='>About me' className='styleAboutMe'/>
                <div className='cmdTab'>Command Prompt</div>
                <div className='buttonCmdPrompContainer'>hello</div>
                <div className='textBox'>
                    <div className='textInTextBox'>
                        {'Microsoft Windows [Version 10.0.19045.4291]'}
                        <br/>
                        {'(c) Microsoft Corporation. All rights reserved.'}
                        <br/>
                        <br/>
                        {'C:\\Users\\BichiuRazvan> Hello World! My name is Bichiu Razvan, I am a 19 year old deeply passionated about technology.' +
                            'I strive to use the transformative power of technology to tackle challenges and create solutions to shape a better future.' +
                            'Through my work, I seek to inspire others and drive the tech industry forward! '}
                        <br/>
                        <br/>
                        {'C:\\Users\\BichiuRazvan> Through effective communication and active listening, I unite teams towards shared objectives, leveraging each member\'s strengths for optimal results. My commitment to open dialogue and mutual respect drives synergy and elevates team performance, consistently delivering outstanding outcomes._'}
                    </div>
                    </div>
                </div>
            </div>
    );
}
export default About;