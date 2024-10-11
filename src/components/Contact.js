import React from 'react';

function Contact({ language }) {
    return (
        <section id="contact">
            <h2>{language === 'fr' ? 'Contactez-moi' : 'Contact Me'}</h2>
            {language === 'fr' ? (
                <div>
                    <p>Email : attar.imadeddine@gmail.com</p>
                    <p>Téléphone : +33 6 22 11 69 43</p>
                    <p>LinkedIn : <a href="https://www.linkedin.com/in/imad-attar-ba130389">Voir mon LinkedIn</a></p>
                </div>
            ) : (
                <div>
                    <p>Email: attar.imadeddine@gmail.com</p>
                    <p>Phone: +33 6 22 11 69 43</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/imad-attar-ba130389">View my LinkedIn</a></p>
                </div>
            )}
        </section>
    );
}

export default Contact;
