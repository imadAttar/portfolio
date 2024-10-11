import React from 'react';

function About({ language }) {
    return (
        <section id="about" className="centered-section">
            <img src={`${process.env.PUBLIC_URL}/me.jpeg`} alt="Profile" className="profile-photo" />
            <h2>{language === 'fr' ? 'À propos de moi' : 'About Me'}</h2>
            {language === 'fr' ? (
                <div>
                    <p>
                        Passionné par le développement Java, je crée des solutions sur mesure qui transforment les idées en réalité.
                        Mon approche repose sur une écoute attentive des besoins des clients, associée à une méthodologie Agile pour garantir des livraisons rapides et efficaces.
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        Passionate about Java development, I build tailored solutions that turn ideas into reality.
                        My approach is based on actively listening to client needs, combined with Agile methodology to ensure fast and efficient delivery.
                    </p>
                </div>
            )}
        </section>
    );
}

export default About;
