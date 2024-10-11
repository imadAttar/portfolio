import React from 'react';

const experiences = {
    fr: [
        {
            title: 'Ingénieur logiciel Java',
            company: 'UGAP',
            dates: 'Janvier 2022 - Présent',
            location: 'Montpellier, Occitanie, France',
            description: 'J\'ai activement participé à la transition d\'une application web monolithique vers une architecture en microservices en tant que Développeur Senior. Responsable de la conception, du développement et de la maintenance de divers microservices, avec une étroite collaboration avec des équipes pluridisciplinaires pour aligner les décisions techniques avec les objectifs commerciaux.',
        },
        {
            title: 'Chef d’équipe technique Java-Angular',
            company: 'Airbus Helicopters',
            dates: 'Septembre 2019 - Octobre 2021',
            location: 'Aix-en-Provence, Provence-Alpes-Côte d’Azur, France',
            description: 'Responsable du développement de solutions informatiques pour sécuriser les échanges entre Airbus et l\'équipe coréenne, nécessaires pour la construction d\'hélicoptères. Collaboration avec une équipe offshore en Inde pour assurer le succès des livraisons et le suivi des progrès.',
        },
        {
            title: 'Ingénieur Full Stack Java-Angular',
            company: 'Airbus Helicopters',
            dates: 'Mars 2019 - Août 2019',
            location: 'Aix-en-Provence, France',
            description: 'Développement d\'un outil de suivi des pièces d\'hélicoptères en réparation, en réduisant les délais et en résolvant les problèmes de pièces perdues.',
        },
        {
            title: 'Ingénieur logiciel Java | Scrum-Master',
            company: 'Airbus Helicopters',
            dates: 'Octobre 2018 - Mars 2019',
            location: 'Marignane, France',
            description: 'Maintenance et développement de nouvelles fonctionnalités pour une application de suivi des pièces non conformes, essentielle pour la certification des hélicoptères par l\'EASA.',
        },
        {
            title: 'Ingénieur logiciel Java | Scrum-Master',
            company: 'Capgemini',
            dates: 'Octobre 2017 - Juillet 2018',
            location: 'Aix-en-Provence, France',
            description: 'Supervision des équipes et développement d\'applications pour le Ministère de l\'Éducation Nationale, en assurant l\'adhérence aux méthodologies Agile et l\'optimisation de la performance des applications.',
        },
        {
            title: 'Ingénieur logiciel Java',
            company: 'Atos',
            dates: 'Juillet 2017 - Août 2017',
            location: 'Marseille, France',
            description: 'Développement et maintenance d\'applications pour la gestion des fonds de pension de la SNCF, en modernisant les systèmes existants pour une meilleure gestion des prestations de retraite.',
        },
        {
            title: 'Ingénieur logiciel Java',
            company: 'Feeder',
            dates: 'Janvier 2015 - Août 2015',
            location: 'Vitrolles, France',
            description: 'Création de batchs pour le recalcul des prix des produits en fonction des fluctuations du dollar, assurant une mise à jour dynamique des prix.',
        },
        {
            title: 'Ingénieur logiciel Java',
            company: 'Ministère de l\'écologie de l\'énergie et du développement durable',
            dates: 'Avril 2014 - Juillet 2014',
            location: 'Aix-en-Provence, France',
            description: 'Développement d\'un générateur de code pour une application web JEE, utilisant des techniques d\'Architecture Dirigée par les Modèles (MDA) pour garantir la conformité avec les normes du département.',
        }
    ],
    en: [
        {
            title: 'Java Software Engineer',
            company: 'UGAP',
            dates: 'January 2022 - Present',
            location: 'Montpellier, Occitanie, France',
            description: 'Actively involved in transitioning a monolithic web application to a microservices architecture as a Senior Developer. Responsible for designing, developing, and maintaining various microservices, collaborating closely with cross-disciplinary teams to align technical decisions with broader business goals.',
        },
        {
            title: 'Technical Team Lead Java-Angular',
            company: 'Airbus Helicopters',
            dates: 'September 2019 - October 2021',
            location: 'Aix-en-Provence, Provence-Alpes-Côte d’Azur, France',
            description: 'Led the development of IT solutions to secure data exchanges between Airbus and the Korean team for helicopter construction. Collaborated with an offshore team in India to ensure successful deliveries and progress tracking.',
        },
        {
            title: 'Full Stack Java-Angular Engineer',
            company: 'Airbus Helicopters',
            dates: 'March 2019 - August 2019',
            location: 'Aix-en-Provence, France',
            description: 'Developed a tracking tool for helicopter parts under repair, reducing delays and solving issues with lost parts.',
        },
        {
            title: 'Java Software Engineer | Scrum Master',
            company: 'Airbus Helicopters',
            dates: 'October 2018 - March 2019',
            location: 'Marignane, France',
            description: 'Maintained and developed new features for a key application tracking non-compliant parts, essential for EASA certification of helicopters.',
        },
        {
            title: 'Java Software Engineer | Scrum Master',
            company: 'Capgemini',
            dates: 'October 2017 - July 2018',
            location: 'Aix-en-Provence, France',
            description: 'Supervised teams and developed applications for the French Ministry of Education, ensuring adherence to Agile methodologies and optimizing application performance.',
        },
        {
            title: 'Java Software Engineer',
            company: 'Atos',
            dates: 'July 2017 - August 2017',
            location: 'Marseille, France',
            description: 'Developed and maintained applications for managing SNCF pension funds, modernizing existing systems for better pension management.',
        },
        {
            title: 'Java Software Engineer',
            company: 'Feeder',
            dates: 'January 2015 - August 2015',
            location: 'Vitrolles, France',
            description: 'Created batch processes to recalculate product prices based on dollar fluctuations, ensuring dynamic price updates.',
        },
        {
            title: 'Java Software Engineer',
            company: 'Ministry of Ecology, Energy, and Sustainable Development',
            dates: 'April 2014 - July 2014',
            location: 'Aix-en-Provence, France',
            description: 'Developed a code generator for a JEE web application using Model-Driven Architecture (MDA) techniques to ensure compliance with departmental standards.',
        }
    ]
};

function Experience({ language }) {
    return (
        <section id="experience">
            <h2>{language === 'fr' ? 'Expérience' : 'Experience'}</h2>
            {experiences[language].map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3>{exp.title} - {exp.company}</h3>
                    <p>{exp.dates} | {exp.location}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Experience;
