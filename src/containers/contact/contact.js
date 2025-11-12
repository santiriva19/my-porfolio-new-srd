import React from 'react';
import ContactComponent from '../../components/contact/contact';

const ContactPage = () => {
    return (
        <section id="contact" aria-labelledby="contact-section">
            <h2 id="contact-section" className="sr-only">Contact Information</h2>
            <ContactComponent />
        </section>
    );
};

export default ContactPage;