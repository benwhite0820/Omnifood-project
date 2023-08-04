import GridAndCenterContainer from '@components/grid-and-center-container/grid-and-center-container.component';
import './meal-section.style.scss';
import SectionMealCard from '@components/section-meal-component/section-meal-card/section-meal-card.component';
import sectionmealCardData from '@data/mealCardSection.json';
import SectionMealCheckItem from '@components/section-meal-component/section-meal-check-item/section-meal-check-item.component';
import sectionMealCheckItem from '@data/mealCheckItemSection.json';

type ResponseData = {
    image: string;
    pillButtonTitle: Array<string>;
    features: Array<string>;
    title: string;
};

const MealSection = () => {
    const { sectionMealCard: responseData } = sectionmealCardData as {
        sectionMealCard: Array<ResponseData>;
    };

    return (
        <section className="section-meals">
            <GridAndCenterContainer
                container
                className="section-meals--text-container"
            >
                <span className="section-meal--title">MEALS</span>
                <h2 className="section-meal--paragraph">
                    Omnifood AI chooses from 5,000+ recipes
                </h2>
            </GridAndCenterContainer>

            <GridAndCenterContainer
                grid
                columns={3}
                verticalCenter={false}
                container
            >
                {responseData.map((item, index) => (
                    <SectionMealCard props={item} key={index} />
                ))}

                <SectionMealCheckItem
                    checkItemTitles={sectionMealCheckItem.checkItemTitle}
                    checkItems={sectionMealCheckItem.checkItems}
                />
            </GridAndCenterContainer>

            <GridAndCenterContainer
                container
                className="section-meals--link-container"
            >
                <a href="#" className="section-meals--link">
                    See all recepts →
                </a>
            </GridAndCenterContainer>
        </section>
    );
};

export default MealSection;
