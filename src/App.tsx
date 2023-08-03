import HeaderAndNavigation from '@pages/header-and-navigation/header-and-navigation.page';
import './App.css';
import HeroSection from '@pages/hero-section/hero-section.page';
import SectionHow from '@pages/section-how/section-how.page';
import SectionFeatured from '@pages/sectin-featured/section-featured.page';
import SectionMeal from '@pages/section-meal/section-meal.page';

function App() {
    return (
        <>
            <HeaderAndNavigation />
            <HeroSection />
            <SectionFeatured />
            <SectionHow />
            <SectionMeal />
        </>
    );
}

export default App;
