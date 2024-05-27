import React, { useEffect } from 'react';
import './Styles.css';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const scriptSrc = "//js.hsforms.net/forms/embed/v2.js";
        const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

        const createForm = (portalId, formId) => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm',
                    onFormSubmit: () => {
                        navigate('/Home');
                    }
                });
            }
        };

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            script.onload = () => {
                createForm('46274837', '2d86864e-cd65-4064-96b2-2f9c71fd05c2');
            };

            document.body.appendChild(script);
        } else {
            createForm('46274837', '2d86864e-cd65-4064-96b2-2f9c71fd05c2');
        }

        return () => {
            const formContainer = document.querySelector('#hubspotForm');
            if (formContainer) {
                formContainer.innerHTML = '';
            }
        };
    }, [navigate]);

    return (
        <div className="container">
            <div className="signup-box">
                <div id="hubspotForm"></div>
               
                <Link to="/" className="five">GO BACK</Link>
            </div>
        </div>
    );
};

export default Signin;
