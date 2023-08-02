import Logo from '@assets/img/omnifood-logo.png';
import './header-and-navigation.style.scss';

const HeaderAndNavigation = () => {
    return (
        <header className="header">
            <img className="logo" src={Logo} />
            <nav className="main-nav-container">
                <ul className="main-nav-bar-item">
                    <li>
                        <a href="#" className="main-nav-bar-link">
                            Section 1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-bar-link">
                            Section 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-bar-link">
                            Section 3
                        </a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-bar-link">
                            Section 4
                        </a>
                    </li>
                    <li>
                        <a href="#" className="main-nav-bar-link last-nav-link">
                            Section 5
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderAndNavigation;
