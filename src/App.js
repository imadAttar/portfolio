import React, { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LanguageToggle from './components/LanguageToggle';
import './style.css';

function App() {
    const [language, setLanguage] = useState('fr');

    return (
        <>
            {/* Fixed elements for language toggle and contact */}
            <div className="fixed-elements">
                <LanguageToggle language={language} setLanguage={setLanguage} />
                <Contact language={language} />
            </div>

            {/* Main content */}
            <header className="hero">
                <h1>
                    {language === 'fr'
                        ? 'Imadeddine Attar - Expert Java & Architecte Microservices'
                        : 'Imadeddine Attar - Java Expert & Microservices Architect'}
                </h1>
                <p>
                    {language === 'fr'
                        ? 'Avec 9 ans d\'expérience dans le développement Java et la gestion de projets complexes, je transforme les défis techniques en solutions efficaces, centrées sur les besoins de mes clients.'
                        : 'With 9 years of experience in Java development and managing complex projects, I turn technical challenges into efficient solutions, focused on client needs.'}
                </p>
            </header>

            <main>
                <About language={language} />
                <Experience language={language} />
                <Skills language={language} />
            </main>

            <footer className="footer">
                <p>
                    {language === 'fr'
                        ? 'Merci de votre visite! N’hésitez pas à me contacter pour discuter de vos projets.'
                        : 'Thank you for visiting! Feel free to reach out to discuss your projects.'}
                </p>
            </footer>
        </>
    );
}

export default App;
