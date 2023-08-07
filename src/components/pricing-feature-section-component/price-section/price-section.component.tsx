import './price-section.style.scss';
import { IoCheckmarkOutline, IoCloseOutline } from 'react-icons/io5';
import Button from '@components/button/button.component';

type Props = {
    title: string;
    price: string;
    description: string;
    feature: Array<string>;
};

const PriceSectionCard = ({ title, price, description, feature }: Props) => {
    return (
        <div
            className={`price-seciton--container ${
                title === 'COMPLETE' ? 'complete-card' : 'starter-card'
            }`}
        >
            <header className="price-section--container__header">
                <p className="price-section--container__title">{title}</p>
                <p className="price-section--container__price">
                    <span>$</span>
                    {price}
                </p>
                <p className="price-section--container__description">
                    {description}
                </p>
            </header>

            <ul className={`price-section--container__items`}>
                {feature.map((item) => {
                    return (
                        <li
                            key={item}
                            className="price-section--container__item"
                        >
                            {item ? (
                                <IoCheckmarkOutline className="price-section--container__icon" />
                            ) : (
                                <IoCloseOutline className="price-section--container__icon" />
                            )}
                            <span>{item}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="price-section--container__button">
                <Button buttonType="primary">Start eating well</Button>
            </div>
        </div>
    );
};

export default PriceSectionCard;
