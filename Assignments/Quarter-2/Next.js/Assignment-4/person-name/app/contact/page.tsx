import React from 'react';
import Link from 'next/link';

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <Link href="/about">
                <br /><br />

                <h2>&nbsp;Go to About</h2>
            </Link>
        </div>
    );
}

export default Contact;
