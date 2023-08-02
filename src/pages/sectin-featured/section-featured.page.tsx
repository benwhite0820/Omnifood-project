import GridAndCenterContainer from '@components/grid-and-center-container/grid-and-center-container.component';
import './section-featured.style.scss';
import TechCrunch from '@assets/img/logos/techcrunch.png';
import BusinessInsiderLogo from '@assets/img/logos/business-insider.png';
import NewYorkTimesLogo from '@assets/img/logos/the-new-york-times.png';
import ForbesLogo from '@assets/img/logos/forbes.png';
import USATodayLogo from '@assets/img/logos/usa-today.png';

type LogoAndDescription = {
    logo: string;
    description: string;
};

const SectionFeatured = () => {
    const logoAndDescription = [
        {
            logo: TechCrunch,
            description: 'Techcrunch logo',
        },
        {
            logo: BusinessInsiderLogo,
            description: 'Business Insider logo',
        },
        {
            logo: NewYorkTimesLogo,
            description: 'New York Times logo',
        },
        {
            logo: ForbesLogo,
            description: 'Forbes logo',
        },
        {
            logo: USATodayLogo,
            description: 'USA Today logo',
        },
    ];

    return (
        <section className="section-featured">
            <GridAndCenterContainer container>
                <h2 className="section-featured--text">AS FEATURED IN</h2>
                <div className="section-featured--logos">
                    {logoAndDescription.map(
                        ({ logo, description }: LogoAndDescription) => (
                            <img src={logo} alt={description} />
                        )
                    )}
                </div>
            </GridAndCenterContainer>
        </section>
    );
};

export default SectionFeatured;
