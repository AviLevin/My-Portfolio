import React from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';



const WhatsApp = () => {
    return (

        <div className="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=+972549246843&text=Hi Avi, we wants your services!!" class="float" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>

        </div>
    );
}

export default WhatsApp;