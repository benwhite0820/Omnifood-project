import Logo from '@assets/img/omnifood-logo.png';
import './header-and-navigation.style.scss';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import React from 'react';

const HeaderAndNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navBarTitle = [
        { title: 'How it works', link: '#section-how' },
        { title: 'Meals', link: '#section-meals' },
        { title: 'Testimonials', link: '#seciton-testimonials' },
        { title: 'Pricing', link: '#pricing-section' },
        { title: 'Try for free', link: '#sign-up-section' },
    ];

    return (
        <header className="header">
            <a href="#">
                <img className="logo" src={Logo} />
            </a>

            <nav
                className={`main-nav-container ${
                    isMenuOpen ? 'menu-bar-open' : ''
                }`}
            >
                <ul className="main-nav-bar-item">
                    {navBarTitle.map(({ title, link }) => {
                        return (
                            <li key={title}>
                                <a
                                    href={link}
                                    className={`main-nav-bar-link ${
                                        title === 'Try for free'
                                            ? 'last-nav-link'
                                            : ''
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="phone-nav-bar">
                {isMenuOpen ? (
                    <IoCloseOutline
                        onClick={() => setIsMenuOpen(false)}
                        size={48}
                    />
                ) : (
                    <IoMenuOutline
                        onClick={() => setIsMenuOpen(true)}
                        size={48}
                    />
                )}
            </div>
        </header>
    );
};

export default HeaderAndNavigation;
