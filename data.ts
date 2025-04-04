import { Section } from "./type";

export const profile = {
    name: "Nohiria Velazquez",
    location: "📍 Lima, Peru",
    description:
        "Web developer in Laravel and PHP. I have experience in creating and maintaining web applications, integrating different technologies to optimize their performance. This has allowed me to implement solutions for process automation, improve data management, and integrate APIs and third-party tools. I always strive to refine my skills and develop scalable solutions with a real impact.",
    image: "/profile2.jpg",
    github: "https://github.com/nohiria",
    linkedin: "https://www.linkedin.com/in/nohiria-velázquez-5b2b611b3",
    email: "nohiriavg@gmail.com"
};

export const sections: Section[] = [
    {
        id: "intro",
        label: "Intro",
        type: "intro",
        content: []
    },
    {
        id: "work-experience",
        label: "Work Experience",
        type: "work",
        content: [
            {
                title: "Web Developer",
                company: "BoutiqueAppsLLC",
                startDate: "June 2024",
                endDate: "Present",
                "description": [
                    "Developed a Laravel module for third-party integrations, leveraging PHP and MySQL.",
                    "Implemented AJAX with JavaScript for real-time, dynamic data updates.",
                    "Automated certificate regeneration using Laravel queues and Eloquent ORM.",
                    "Integrated offline payment processing with MySQL transactions and Blade components.",
                    "Secured document downloads via Boldsign API with encryption and Laravel middleware.",
                    "Applied encryption techniques (AES, Laravel Encryption) to securely manage document IDs and sensitive data."
                ]
            },
            {
                "title": "IT Assistant",
                "company": "CyPARS-Perú (ONG)",
                "startDate": "2020",
                "endDate": "2022",
                "description": [
                    "Streamlined internal processes by developing and implementing tailored IT solutions.",
                    "Resolved hardware and software issues swiftly, minimizing downtime for staff and teams.",
                    "Enhanced workflow and productivity through the implementation of efficient technical solutions.",
                    "Conducted training on software usage and best practices to improve team technical skills."
                ]
            },
        ],
    },
    {
        id: "education",
        label: "Education",
        type: "study",
        content: [
            {
                title: "Back-end with Java",
                institution: "Globant University",
                startDate: "Mar. 2023",
                endDate: "Mar. 2024",
                description: "Unit testing, back-end development, and collaborative programming."
            },
            {
                title: "Cybersecurity Specialization",
                institution: "Cisco Networking Academy",
                startDate: "Aug. 2022",
                endDate: "Nov. 2022",
                description: "Endpoint security, threat management, networking, and network defense."
            },
            {
                title: "Beginner Programming",
                institution: "Alura",
                startDate: "Jul. 2022",
                endDate: "",
                description: "Programming fundamentals with 94 hours of training."
            },
            {
                title: "Architecture",
                institution: "Universidad del Zulia",
                startDate: "2012",
                endDate: "2018 (unfinished)",
                description: ""
            },
        ]
    },
    {
        "id": "skills",
        "label": "Skills",
        "type": "skills",
        "content": [
            {
                "name": "Laravel",
                "icon": "FaLaravel",
                "links": ["https://laravel.com/"]
            },
            {
                "name": "PHP",
                "icon": "FaPhp",
                "links": ["https://www.php.net/"]
            },
            {
                "name": "Java",
                "icon": "FaJava",
                "links": ["https://www.java.com/"]
            },
            {
                "name": "SpringBoot",
                "icon": "SiSpringboot",
                "links": ["https://spring.io/projects/spring-boot"]
            },
            {
                "name": "SpringMVC",
                "icon": "SiSpring",
                "links": ["https://spring.io/projects/spring-framework"]
            },
            {
                "name": "Maven",
                "icon": "SiApachemaven",
                "links": ["https://maven.apache.org/"]
            },
            {
                "name": "MySQL",
                "icon": "SiMysql",
                "links": ["https://www.mysql.com/"]
            },
            {
                "name": "SQL",
                "icon": "SiPostgresql",
                "links": ["https://www.w3schools.com/sql/"]
            },
            {
                "name": "OLAP",
                "icon": "SiGoogleanalytics",
                "links": ["https://en.wikipedia.org/wiki/Online_analytical_processing"]
            },
            {
                "name": "OLTP",
                "icon": "SiGooglecloud",
                "links": ["https://en.wikipedia.org/wiki/Online_transaction_processing"]
            },
            {
                "name": "Bootstrap",
                "icon": "SiBootstrap",
                "links": ["https://getbootstrap.com/"]
            },
            {
                "name": "HTML5",
                "icon": "FaHtml5",
                "links": ["https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"]
            },
            {
                "name": "CSS3",
                "icon": "FaCss3",
                "links": ["https://developer.mozilla.org/en-US/docs/Web/CSS"]
            },
            {
                "name": "JavaScript",
                "icon": "SiJavascript",
                "links": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
            },
            {
                "name": "Cybersecurity",
                "icon": "FaShieldAlt",
                "links": ["https://www.cisa.gov/cybersecurity"]
            },
            {
                "name": "Threat Management",
                "icon": "FaExclamationTriangle",
                "links": ["https://en.wikipedia.org/wiki/Threat_management"]
            },
            {
                "name": "Network Defense",
                "icon": "FaNetworkWired",
                "links": ["https://en.wikipedia.org/wiki/Network_security"]
            },
            {
                "name": "Endpoint Security",
                "icon": "FaDesktop",
                "links": ["https://en.wikipedia.org/wiki/Endpoint_security"]
            },
            {
                "name": "Git",
                "icon": "FaGitAlt",
                "links": ["https://git-scm.com/"]
            },
            {
                "name": "Unit Testing",
                "icon": "SiTestinglibrary",
                "links": ["https://en.wikipedia.org/wiki/Unit_testing"]
            }
        ]
    }
];