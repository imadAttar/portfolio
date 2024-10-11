import React from 'react';

const skills = {
    fr: {
        backend: [
            'Java 8+',
            'Spring Boot',
            'Spring Data',
            'Spring Batch',
            'Microservices',
            'Architecture DDD',
            'Hibernate / JPA',
            'Design Patterns'
        ],
        frontend: [
            'Angular',
            'React',
            'HTML5',
            'CSS3',
            'JavaScript',
            'AngularJS'
        ],
        agile: [
            'Agile',
            'Scrum',
            'SAFe',
            'JIRA',
            'Confluence'
        ],
        devOps: [
            'Docker',
            'Kubernetes',
            'Git',
            'Jenkins',
            'CI/CD'
        ],
        databases: [
            'SQL',
            'MySQL',
            'PostgreSQL',
            'SQL Server',
            'Elasticsearch'
        ],
        testing: [
            'JUnit',
            'ArchUnit',
            'Tests unitaires',
            'Sonar',
            'CheckStyle',
            'FindBugs',
            'PMD'
        ]
    },
    en: {
        backend: [
            'Java 8+',
            'Spring Boot',
            'Spring Data',
            'Spring Batch',
            'Microservices',
            'DDD Architecture',
            'Hibernate / JPA',
            'Design Patterns'
        ],
        frontend: [
            'Angular',
            'React',
            'HTML5',
            'CSS3',
            'JavaScript',
            'AngularJS'
        ],
        agile: [
            'Agile',
            'Scrum',
            'SAFe',
            'JIRA',
            'Confluence'
        ],
        devOps: [
            'Docker',
            'Kubernetes',
            'Git',
            'Jenkins',
            'CI/CD'
        ],
        databases: [
            'SQL',
            'MySQL',
            'PostgreSQL',
            'SQL Server',
            'Elasticsearch'
        ],
        testing: [
            'JUnit',
            'ArchUnit',
            'Unit Testing',
            'Sonar',
            'CheckStyle',
            'FindBugs',
            'PMD'
        ]
    }
};

function Skills({ language }) {
    const categories = skills[language];

    return (
        <section id="skills" className="centered-section">
            <h2>{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
            {Object.keys(categories).map((category, index) => (
                <div key={index} className="skills-category">
                    <h3>
                        {category === 'backend' && (language === 'fr' ? 'Back-end' : 'Backend')}
                        {category === 'frontend' && (language === 'fr' ? 'Front-end' : 'Frontend')}
                        {category === 'agile' && 'Agile & Collaboration'}
                        {category === 'devOps' && 'DevOps'}
                        {category === 'databases' && (language === 'fr' ? 'Bases de données' : 'Databases')}
                        {category === 'testing' && (language === 'fr' ? 'Tests & Qualité' : 'Testing & Quality')}
                    </h3>
                    <ul>
                        {categories[category].map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Skills;
