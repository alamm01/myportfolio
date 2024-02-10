import React from "react";

export default function Resume() {
    // List of proficiencies for demonstration
    const proficiencies = [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "HTML & CSS",
        "GraphQL",
        "TypeScript",
    ];

    // Inline CSS styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
        },
        resumeLink: {
            backgroundColor: '#007bff',
            color: '#ffffff',
            padding: '10px 15px',
            textDecoration: 'none',
            borderRadius: '5px',
            marginBottom: '20px',
        },
        proficiencyList: {
            listStyleType: 'none',
            padding: 0,
        },
        proficiencyItem: {
            marginBottom: '10px',
            border: '1px solid #007bff',
            borderRadius: '5px',
            padding: '10px',
            width: 'fit-content',
        }
    };

    return (
        <div style={styles.container}>
            <h1>Resume Page</h1>
            <a href="/path-to-your-resume.pdf" download style={styles.resumeLink}>
                Download Resume
            </a>
            <h2>Proficiencies</h2>
            <ul style={styles.proficiencyList}>
                {proficiencies.map((proficiency, index) => (
                    <li key={index} style={styles.proficiencyItem}>
                        {proficiency}
                    </li>
                ))}
            </ul>
        </div>
    );
}
