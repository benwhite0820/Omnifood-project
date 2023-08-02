import './hero-section.style.scss';
import HeroSectionImg from '@assets/img/hero.png';
import CustomLogo1 from '@assets/img/customers/customer-1.jpg';
import CustomLogo2 from '@assets/img/customers/customer-2.jpg';
import CustomLogo3 from '@assets/img/customers/customer-3.jpg';
import CustomLogo4 from '@assets/img/customers/customer-4.jpg';
import CustomLogo5 from '@assets/img/customers/customer-5.jpg';
import CustomLogo6 from '@assets/img/customers/customer-6.jpg';
import Button from '@components/button/button.component';

const HeroSection = () => {
    return (
        <main>
            <section className="section-hero">
                <div className="hero">
                    <div className="hero-text-box">
                        <h1 className="hero-primary-text">
                            A healthy meal delivered to your door, every single
                            day
                        </h1>
                        <p className="hero-description">
                            The smart 365-days-per-year food subscription that
                            will make you eat healthy again. Tailored to your
                            personal tastes and nutritional needs.
                        </p>
                        <Button buttonType="primary" className="margin-right">
                            Start eating well
                        </Button>
                        <Button buttonType="normal">Learn more &darr;</Button>
                        <div className="custom-logo-box">
                            <img src={CustomLogo1} alt="Custom Logo" />
                            <img src={CustomLogo2} alt="Custom Logo" />
                            <img src={CustomLogo3} alt="Custom Logo" />
                            <img src={CustomLogo4} alt="Custom Logo" />
                            <img src={CustomLogo5} alt="Custom Logo" />
                            <img src={CustomLogo6} alt="Custom Logo" />
                            <p>
                                <span>250,000+</span> meals delivered last year!
                            </p>
                        </div>
                    </div>
                    <div className="hero-section-img">
                        <img
                            className="hero-img"
                            src={HeroSectionImg}
                            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;
