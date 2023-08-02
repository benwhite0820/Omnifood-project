import './section-how-img.style.scss';

type Props = {
    image: string;
    description: string;
};

const SectionHowImg = ({ image, description }: Props) => {
    return (
        <div className="section-how-image">
            <img
                className="section-how-image--logo"
                src={image}
                alt={description}
            ></img>
        </div>
    );
};

export default SectionHowImg;
