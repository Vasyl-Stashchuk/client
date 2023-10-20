import React, { useState } from 'react';
import '../css/ContactForm.css';
import '../css/index.css';

const ContactForm = ({ onFormSubmit }) => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onFormSubmit({ name, number, email, title, message });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            <h4>Ваші ім'я та прізвище:</h4>
            <input className="contact-input"
                   type="text"
                   name="name"
                   value={name}
                   placeholder="Ваші ім'я та прізвище (обов'язково)"
                   onChange={(e) => setName(e.target.value)}
                   required
            />

            <h4>Ваш номер телефону:</h4>
            <input className="contact-input"
                   type="tel"
                   name="number"
                   value={number}
                   placeholder="+380"
                   onChange={(e) => setNumber(e.target.value)}
                   required
            />

            <h4>Ваш e-mail:</h4>
            <input className="contact-input"
                   type="email"
                   name="email"
                   value={email}
                   placeholder="*Ваш e-mail (обов'язково)"
                   onChange={(e) => setEmail(e.target.value)}
                   required
            />

            <h4>Тема повідомлення:</h4>
            <input className="contact-input"
                   type="text"
                   name="title"
                   value={title}
                   placeholder="*Тема"
                   onChange={(e) => setTitle(e.target.value)}
                   required
            />

            <h4>Повідомлення:</h4>
            <textarea className="contact-input"
                      name="message"
                      value={message}
                      placeholder="*Повідомлення"
                      onChange={(e) => setMessage(e.target.value)}
                      required
            />

            <button className="contact-button" type="submit">Відправити</button>
        </form>
    );
};

export default ContactForm;
