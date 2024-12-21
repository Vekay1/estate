import React from 'react';
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">

                <img src="/logo.png" alt="" width={100}/>
                <div className="h-menu">
                    <a href="">Rasidents</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </section>
    )
}


export default Header;