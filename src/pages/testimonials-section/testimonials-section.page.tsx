import Testimonial from '@components/testimonial-section-component/testimonial.component';
import './testimonials-section.style.scss';
import testimonialData from '@data/testimonialSection.json';
import galleryPhoto1 from '@assets/img/gallery/gallery-1.jpg';
import galleryPhoto2 from '@assets/img/gallery/gallery-2.jpg';
import galleryPhoto3 from '@assets/img/gallery/gallery-3.jpg';
import galleryPhoto4 from '@assets/img/gallery/gallery-4.jpg';
import galleryPhoto5 from '@assets/img/gallery/gallery-5.jpg';
import galleryPhoto6 from '@assets/img/gallery/gallery-6.jpg';
import galleryPhoto7 from '@assets/img/gallery/gallery-7.jpg';
import galleryPhoto8 from '@assets/img/gallery/gallery-8.jpg';
import galleryPhoto9 from '@assets/img/gallery/gallery-9.jpg';
import galleryPhoto10 from '@assets/img/gallery/gallery-10.jpg';
import galleryPhoto11 from '@assets/img/gallery/gallery-11.jpg';
import galleryPhoto12 from '@assets/img/gallery/gallery-12.jpg';

type TestimonialData = {
    name: string;
    feedback: string;
    image: string;
};

const TestimonialsSection = () => {
    const { testimonial } = testimonialData as {
        testimonial: Array<TestimonialData>;
    };

    const galleryImage = [
        galleryPhoto1,
        galleryPhoto2,
        galleryPhoto3,
        galleryPhoto4,
        galleryPhoto5,
        galleryPhoto6,
        galleryPhoto7,
        galleryPhoto8,
        galleryPhoto9,
        galleryPhoto10,
        galleryPhoto11,
        galleryPhoto12,
    ];

    return (
        <section className="seciton-testimonials" id="seciton-testimonials">
            <div className="testimonials--container">
                <span>TESTIMONIALS</span>
                <h2>Once you try it, you can't go back</h2>

                <div className="testimonials--figure-container">
                    {testimonial.map(({ name, feedback, image }) => (
                        <Testimonial
                            key={name}
                            name={name}
                            feedback={feedback}
                            image={image}
                        />
                    ))}
                </div>
            </div>
            <div className="gallery">
                {galleryImage.map((item, index) => (
                    <figure className="gallery--figure" key={index}>
                        <img
                            src={item}
                            alt="Photo of beautifully arranged food"
                            className="gallery--figure__photo"
                        />
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
