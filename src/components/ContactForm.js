import React, { useState } from 'react';
import '../css/ContactForm.css';
import '../css/index.css';
import {SUCCESS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";



const ContactForm = () => {
    const [userName, setUserName] = useState('');
    const [userTel, setUserTel] = useState('+380');
    const [email, setEmail] = useState('');
    const [userSubject, setUserSubject] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const history = useHistory();  // Отримуємо історію браузера для переходу до інших сторінок.
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can add any custom logic you want before the form submission here
    //     // Then, submit the form programmatically:
    //     e.target.submit();
    //     history.push(SUCCESS_ROUTE);
    // };

    return (


                    <form
                        className="contact-form"
                        action="https://formsubmit.co/b4adf86b709c51dd5aa0111af02af652"
                        method="POST"
                        // onSubmit={handleSubmit}
                    >

                    {/* Honeypot */}
                    <input type="text" name="_honey" style={{display:'none'}} />
                    {/* Disable Captcha */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://kronkstroy.com/success"  />

                    <h4>Ваше ім'я та прізвище</h4>
                    <input
                        className="contact-input"
                        type="text"
                        minlength="2"
                        name="user-name"
                        placeholder="*Ваше ім'я та прізвище (обов'язково)"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                    <h4>Ваш номер телефону</h4>
                    <input
                        className="contact-input"
                        type="tel"
                        value={userTel}
                        name="user-tel"
                        minlength="11"
                        maxlength="13"
                        placeholder="*Ваш номер телефону"
                        onChange={e => setUserTel(e.target.value)}
                    />
                    <h4>Ваш e-mail</h4>
                    <input
                        className="contact-input"
                        type="email"
                        name="e-mail"
                        placeholder="*Ваш e-mail (обов'язково)"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <h4>Тема повідомлення</h4>
                    <input
                        className="contact-input"
                        type="text"
                        name="user-subject"
                        id="user_subject"
                        placeholder="*Тема"
                        value={userSubject}
                        onChange={e => setUserSubject(e.target.value)}
                        required
                    />
                    <h4>Повідомлення</h4>
                    <textarea
                        className="contact-input"
                        name="user-message"
                        id="user_message"
                        placeholder="*Повідомлення"
                        value={userMessage}
                        onChange={e => setUserMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="contact-button">Відправити</button>
                </form>
    );
};

export default ContactForm;
