import './section-how-text.style.scss';

type Props = {
    step: string;
    title: string;
    context: string;
};

const SectionHowText = ({ step, title, context }: Props) => {
    return (
        <div className="section-how--text-container">
            <p className="section-how--step">{step}</p>
            <h2 className="section-how--title">{title}</h2>
            <p className="section-how--context">{context}</p>
        </div>
    );
};

export default SectionHowText;
