import React from 'react';
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import '../css/ContactForm.css';
import '../css/index.css';

const Contact = () => {

    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch('https://formsubmit.co/c9a9ac51572d6456ead8c120550adf9e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                alert('Message sent successfully');
            } else {
                alert('Error sending message');
            }
        } catch (error) {
            console.error('There was an error sending the message', error);
        }
    };

    return (
        <div>
            <div className="contact bg-black">
                <div className=" d-flex flex-column align-items-center">
                    <h3 className="d-flex justify-content-center bg-black m-0 text-white">КОНТАКТИ</h3>
                    <hr className="super-hr"/>
                    <ContactForm onFormSubmit={handleFormSubmit} />
                </div>
            </div>
            <Map/>
        </div>
    );
};

export default Contact;
