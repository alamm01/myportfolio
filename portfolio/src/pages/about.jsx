import React from "react";
// Assume you have a photo named 'developer-avatar.jpg' in the 'assets/image' directory
import DeveloperAvatar from '../assets/image/avatar.png';

export default function About() {
    // Inline CSS styles
    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '20px',
        },
        avatar: {
            width: '150px', // Adjust the size as needed
            height: '150px',
            borderRadius: '50%', // Makes the image round
            objectFit: 'cover', // Keeps the aspect ratio
            border: '3px solid #007bff', // Optional border
            marginTop: '20px',
            marginBottom: '20px',
        },
        bio: {
            maxWidth: '600px',
            margin: 'auto',
            lineHeight: '1.6', // Adjust for readability
            fontSize: '1.1rem', // Adjust the font size as needed
        }
    };

    return (
        <div style={styles.container}>
            <h1>About Me</h1>
            <img src={DeveloperAvatar} alt="Developer" style={styles.avatar} />
            <p style={styles.bio}>
            As a seasoned Full Stack Developer, I bring a comprehensive toolkit of modern web technologies to the table. My journey in tech began with the foundational languages of the web, HTML & CSS, which served as the bedrock for my expertise in front-end development. Quickly recognizing the power of JavaScript, I dove deep into its ecosystem, mastering both vanilla JS and its influential frameworks and libraries.

My proficiency with React allows me to construct dynamic and responsive user interfaces that provide seamless user experiences. Complementing my front-end skills, I am well-versed in Node.js and Express.js, which enable me to build robust and scalable back-end services. My endeavors in server-side development are further enhanced by my adeptness with MongoDB, utilizing this NoSQL database to architect efficient, schema-less data storage solutions.

GraphQL has been my go-to for creating flexible and efficient APIs, allowing me to tailor data delivery to the exact needs of front-end applications. Additionally, my experience with TypeScript has sharpened my ability to write more reliable and maintainable code, thanks to its static typing system.

I am a fervent advocate for clean code and best practices, and I approach every project with a commitment to craftsmanship and a passion for innovation. Whether working solo or collaborating in a team, my goal is to deliver exceptional digital experiences that drive client success and user satisfaction.
            </p>
        </div>
    );
}
