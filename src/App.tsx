import HeaderAndNavigation from '@pages/header-and-navigation/header-and-navigation.page';
import './App.css';
import HeroSection from '@pages/hero-section/hero-section.page';
import HowSection from '@pages/how-section/how-section.page';
import FeatureSection from '@pages/feature-section/feature-section.page';
import MealSection from '@pages/meal-section/meal-section.page';
import TestimonialsSection from '@pages/testimonials-section/testimonials-section.page';
import PricingSection from '@pages/pricing-section/pricing-section.page';

function App() {
    return (
        <>
            <HeaderAndNavigation />
            <HeroSection />
            <FeatureSection />
            <HowSection />
            <MealSection />
            <TestimonialsSection />
            <PricingSection />
        </>
    );
}

export default App;
