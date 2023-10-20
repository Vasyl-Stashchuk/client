import React from 'react';
import '../css/index.css';
import '../css/About.css';


const Success = () => {
    return (
        <div>
            <div className="contact bg-black">
                <div className=" d-flex flex-column align-items-center">
                    <h3 className="d-flex justify-content-center bg-black text-white">КОНТАКТИ</h3>
                    <hr className="super-hr"/>
                    <h4 className="text-white p-3">Повідомлення надіслано успішно</h4>
                </div>
            </div>
        </div>
    );
};

export default Success;