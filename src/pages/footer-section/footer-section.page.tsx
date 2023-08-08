import GridAndCenterContainer from '@components/grid-and-center-container/grid-and-center-container.component';
import './footer-section.style.scss';
import logo from '@assets/img/omnifood-logo.png';
import {
    IoLogoInstagram,
    IoLogoFacebook,
    IoLogoTwitter,
} from 'react-icons/io5';

const FooterSection = () => {
    const footerData = [
        {
            title: 'Account',
            items: ['Create account', 'Sign in', 'iOS app', 'Android app'],
        },
        {
            title: 'Company',
            items: [
                'About Omnifood',
                'For Business',
                'Cooking partners',
                'Careers',
            ],
        },
        {
            title: 'Resources',
            items: ['Recipe directory', 'Help center', 'Privacy & terms'],
        },
    ];

    return (
        <footer className="footer-section">
            <GridAndCenterContainer
                container
                className="footer-section--container"
            >
                <div className="social-logo">
                    <a href="#">
                        <img src={logo} className="logo" />
                    </a>
                    <ul>
                        <li>
                            <a href="#">
                                <IoLogoInstagram size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <IoLogoFacebook size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <IoLogoTwitter size={24} />
                            </a>
                        </li>
                    </ul>

                    <p>
                        Copyright © 2027 by Omnifood, Inc. All rights reserved
                    </p>
                </div>
                <div className="address-email">
                    <p className="footer-title">Contact us</p>
                    <p className="address">
                        623 Harrison St., 2nd Floor, San Francisco, CA 94107
                    </p>
                    <p className="contact-detail">
                        <a href="tel:415-201-6370" className="footer-link">
                            415-201-6370
                        </a>
                        <br />
                        <a
                            href="mailto:hello@omnifood.com"
                            className="footer-link"
                        >
                            hello@omnifood.com
                        </a>
                    </p>
                </div>
                {footerData.map(({ title, items }) => {
                    return (
                        <div className="footer-data" key={title}>
                            <p className="footer-title">{title}</p>
                            <ul>
                                {items.map((item) => {
                                    return (
                                        <li key={item}>
                                            <a href="#" className="footer-link">
                                                {item}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </GridAndCenterContainer>
        </footer>
    );
};

export default FooterSection;
