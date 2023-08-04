import './testimonial.style.scss';

type Props = {
    name: string;
    feedback: string;
    image: string;
    className?: string;
};

const Testimonial = ({ name, feedback, image, className }: Props) => {
    return (
        <figure className={`testimonial-figure ${className}`}>
            <img
                src={image}
                alt={`The Photo of ${name}`}
                className="testimonial-figure--photo"
            />
            <blockquote className="testimonial-figure--feedback">
                {feedback}
            </blockquote>
            <p className="testimonial-figure--name">— {name}</p>
        </figure>
    );
};

export default Testimonial;
