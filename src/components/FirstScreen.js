import React, { useState, useEffect, useContext } from 'react';
import '../css/WtfNav.css';
import '../css/FirstScreen.css';
import logo from '../assets/Kronk.svg';
// import background from '../assets/';
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import {Context} from "../index";
import {useHistory} from "react-router-dom"; // Імпортуємо зображення для відображення рейтингу.

const FirstScreen = observer(() => {
    const [backgroundUrls, setBackgroundUrls] = useState([]);  // Ініціалізація стану для зберігання масиву URL фонових зображень
    const { deviceStore } = useContext(Context);

    useEffect(() => {
        fetchDevices().then(data => {
            // Вибрати 8 випадкових зображень
            const shuffled = data.rows.sort(() => 0.5 - Math.random());
            const selectedImages = shuffled.slice(0, 8).map(item => process.env.REACT_APP_API_URL + item.img);
            setBackgroundUrls(selectedImages);
        });
    }, []);

    return (
        <div className="first-screen">
            <article className="first-img">
                <img src={logo} alt="MainLogo"/>
            </article>

            {backgroundUrls.map((url, index) => (
                <div key={index} className="first-item" style={{ backgroundImage: `url(${url})` }}></div>
            ))}
        </div>
    );
});

export default FirstScreen;