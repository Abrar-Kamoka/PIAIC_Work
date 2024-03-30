import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Contact Page &nbsp;&nbsp;&nbsp;</h1>
            <Link href="/contact">
                <h2>GoTo Contact Page &nbsp;&nbsp;&nbsp;</h2>
                <hr />
            </Link>
            <div>
                <h1>Bye Bye</h1>
            </div>
        </div>
    );
}

export default About;
