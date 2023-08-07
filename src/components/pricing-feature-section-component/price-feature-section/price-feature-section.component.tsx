import './price-feature-section.style.scss';
import {
    IoInfiniteOutline,
    IoNutritionOutline,
    IoLeafOutline,
    IoPauseOutline,
} from 'react-icons/io5';

type Props = {
    logo: string;
    title: string;
    context: string;
};

const PriceFeatureSection = ({ logo, title, context }: Props) => {
    const logoProps = {
        className: 'price-feature-seciton--icon',
        size: 32,
    };

    const logos = {
        infiniteOutline: <IoInfiniteOutline {...logoProps} />,
        nutritionOutline: <IoNutritionOutline {...logoProps} />,
        leafOutline: <IoLeafOutline {...logoProps} />,
        pauseOutline: <IoPauseOutline {...logoProps} />,
    };

    return (
        <div className="price-feature-section">
            <div className="price-feature-seciton--icon-container">
                {logos[logo as keyof typeof logos]}
            </div>
            <p className="price-feature-seciton--title">{title}</p>
            <p className="price-feature-seciton--context">{context}</p>
        </div>
    );
};

export default PriceFeatureSection;
