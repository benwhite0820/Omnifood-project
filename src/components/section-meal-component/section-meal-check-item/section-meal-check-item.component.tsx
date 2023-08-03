import './section-meal-check-item.style.scss';
import { IoCheckmarkOutline } from 'react-icons/io5';

type Props = {
    checkItemTitles: string;
    checkItems: Array<string>;
};

const SectionMealCheckItem = ({ checkItemTitles, checkItems }: Props) => {
    return (
        <div className="diet-container">
            <h3 className="diet-container--title">{checkItemTitles}</h3>
            <ul className="diet-container--items">
                {checkItems.map((item) => (
                    <li key={item} className="diet-container--item">
                        <IoCheckmarkOutline className="diet-container--item__logo" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SectionMealCheckItem;
