import HeaderAndNavigation from '@pages/header-and-navigation/header-and-navigation.page';
import './App.scss';
import HeroSection from '@pages/hero-section/hero-section.page';
import HowSection from '@pages/how-section/how-section.page';
import FeatureSection from '@pages/feature-section/feature-section.page';
import MealSection from '@pages/meal-section/meal-section.page';
import TestimonialsSection from '@pages/testimonials-section/testimonials-section.page';
import PricingSection from '@pages/pricing-section/pricing-section.page';
import SignUpSection from '@pages/sign-up-section/sign-up-section.page';
import FooterSection from '@pages/footer-section/footer-section.page';
import React from 'react';

function App() {
    const [isHeroSectionVisible, setIsHeroSectionVisible] =
        React.useState(true);

    return (
        <>
            <HeaderAndNavigation isHeroSectionVisible={isHeroSectionVisible} />
            <HeroSection setIsHeroSectionVisible={setIsHeroSectionVisible} />
            <FeatureSection />
            <HowSection />
            <MealSection />
            <TestimonialsSection />
            <PricingSection />
            <SignUpSection />
            <FooterSection />
        </>
    );
}

export default App;
