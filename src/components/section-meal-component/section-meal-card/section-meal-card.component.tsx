import {
    IoFlameOutline,
    IoRestaurantOutline,
    IoStarOutline,
} from 'react-icons/io5';
import './section-meal-card.syle.scss';

type Props = {
    props: {
        image: string;
        pillButtonTitle: Array<string>;
        features: Array<string>;
        title: string;
    };
};

const SectionMealCard = ({
    props: { image, pillButtonTitle, features, title },
}: Props) => {
    const featureLogo = [
        <IoFlameOutline className="feature-logo" />,
        <IoRestaurantOutline className="feature-logo" />,
        <IoStarOutline className="feature-logo" />,
    ];

    const pillButtonBackgroundColor: {
        [key: string]: string;
    } = {
        VEGETARIAN: '#51cf66',
        VEGAN: '#94d82d',
        PALEO: '#ffd43b',
    };

    return (
        <div className="section-meal-card">
            <img src={image} alt={title} className="section-meal-card--iamge" />
            <div className="section-meal-card--context">
                <div className="section-meal-card--context__pill">
                    {pillButtonTitle.map((pillButton) => (
                        <span
                            style={{
                                backgroundColor:
                                    pillButtonBackgroundColor[pillButton],
                            }}
                            key={pillButton}
                        >
                            {pillButton}
                        </span>
                    ))}
                </div>
                <p className="section-meal-card--context__title">{title}</p>

                <ul className="section-meal-card--contex__items">
                    {features.map((item, index) => (
                        <li
                            className="section-meal-card--contex__item"
                            key={item}
                        >
                            {featureLogo[index]}
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SectionMealCard;
