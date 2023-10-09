import React, {useContext, useEffect} from 'react';
import '../css/WtfNav.css';
import '../css/FirstScreen.css';
import logo from '../assets/Kronk.svg';
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import {Context} from "../index";
import {useHistory} from "react-router-dom"; // Імпортуємо зображення для відображення рейтингу.

const FirstScreen = () => {


    return (
        <div className="first-screen">

            <article className="first-img">
                <img src={logo} alt="MainLogo"/>
            </article>

            <div className="first-item"
                 style={{ backgroundImage: `url({})` }}  // Виправлено встановлення backgroundImage
            >
            </div>
            
        </div>
    );
};

export default FirstScreen;