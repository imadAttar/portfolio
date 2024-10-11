import React from 'react';

function LanguageToggle({ language, setLanguage }) {
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="language-select">
            <select value={language} onChange={handleChange}>
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}

export default LanguageToggle;
