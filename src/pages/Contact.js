import React from 'react';
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import '../css/ContactForm.css';
import '../css/index.css';

const Contact = () => {



    return (
        <div>
            <div className="contact bg-black">
                <div className=" d-flex flex-column align-items-center">
                    <h3 className="d-flex justify-content-center bg-black text-white">КОНТАКТИ</h3>
                    <hr className="super-hr"/>
                    <ContactForm />
                </div>
            </div>
            <Map/>
        </div>
    );
};

export default Contact;
