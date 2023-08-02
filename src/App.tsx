import HeaderAndNavigation from '@pages/header-and-navigation-page/header-and-navigation.page';
import './App.css';
import HeroSection from '@pages/hero-section-page/hero-section.page';
import SectionHow from '@pages/section-how-page/section-how-page';

function App() {
    return (
        <>
            <HeaderAndNavigation />
            <HeroSection />
            <SectionHow />
        </>
    );
}

export default App;
