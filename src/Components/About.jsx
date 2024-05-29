import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <div className="about">
            <h2>About Us</h2>
            <p>
                Welcome to our bookstore! We are passionate about books and dedicated to providing a wide selection of
                titles to book lovers everywhere. Our mission is to foster a love of reading and provide a space where
                people can discover new books, authors, and ideas.
            </p>
            <h3>What We Offer</h3>
            <ul>
                <li>A vast collection of books across various genres and categories</li>
                <li>Personalized book recommendations</li>
                <li>Regular author events and book signings</li>
                <li>A cozy reading space for local customers</li>
                <li>Exclusive discounts and offers for members</li>
            </ul>
            <h3>Contact Us</h3>
            <p>
                If you want to contsct us, please call between 9:00AM to 7:00PM <br/>feel free to get in touch with us.
            </p>
            <p>Email: <a href="mailto:info@bookstore.com">bookstore@info.com</a></p>
            <p>Phone: +123-456-7890</p>
            <p>Address: ABC Colony,Hyderabad,500044</p>
            </div>
        </div>
    );
};

export default About;
