import GridAndCenterContainer from '@components/grid-and-center-container/grid-and-center-container.component';
import './pricing-section.style.scss';
import pricingSectionData from '@data/pricingSection.json';

import featureSectionData from '@data/featureSeciton.json';
import PriceSectionCard from '@components/pricing-feature-section-component/price-section/price-section.component';
import PriceFeatureSection from '@components/pricing-feature-section-component/price-feature-section/price-feature-section.component';

type PricingSectionData = {
    title: string;
    price: string;
    description: string;
    feature: Array<string>;
};

type FeatureSectionData = {
    logo: string;
    title: string;
    context: string;
};

const PricingSection = () => {
    const { data: pricingCardData } = pricingSectionData as {
        data: Array<PricingSectionData>;
    };

    const { features } = featureSectionData as {
        features: Array<FeatureSectionData>;
    };

    return (
        <section className="pricing-section">
            <GridAndCenterContainer container>
                <span className="pricing-section--header__price">PRICING</span>
                <h2 className="pricing-section--header__title">
                    Eating well without breaking the bank
                </h2>
            </GridAndCenterContainer>

            <GridAndCenterContainer
                container
                grid
                columns={2}
                verticalCenter={false}
            >
                {pricingCardData.map((item) => {
                    return <PriceSectionCard {...item} key={item.title} />;
                })}
            </GridAndCenterContainer>
            <div className="pricing-section--paragraph">
                <p>
                    Prices include all applicable taxes. You can cancel at any
                    time. Both plans include of the following:
                </p>
            </div>

            <GridAndCenterContainer
                container
                grid
                columns={4}
                verticalCenter={false}
            >
                {features.map((item) => {
                    return <PriceFeatureSection {...item} key={item.logo} />;
                })}
            </GridAndCenterContainer>
        </section>
    );
};

export default PricingSection;
