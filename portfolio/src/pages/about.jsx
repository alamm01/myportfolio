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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    );
}
