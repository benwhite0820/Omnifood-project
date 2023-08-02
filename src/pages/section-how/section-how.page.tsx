import GridAndCenterContainer from '@components/grid-and-center-container/grid-and-center-container.component';
import SectionHowImg from '@components/section-how-component/section-how-img/section-how-img.component';
import SectionHowText from '@components/section-how-component/section-how-text/section-how-text.component';
import SectionHowData from '@data/sectionHow.json';
import SectionHowAppScreen1 from '@assets/img/app/app-screen-1.png';
import SectionHowAppScreen2 from '@assets/img/app/app-screen-2.png';
import SectionHowAppScreen3 from '@assets/img/app/app-screen-3.png';
import './section-how.style.scss';

const SectionHow = () => {
    return (
        <section className="section-how">
            <GridAndCenterContainer container>
                <span className="description-header">HOW IT WORKS</span>
                <p className="description-paragraph">
                    Your daily dose of health in 3 simple steps
                </p>
            </GridAndCenterContainer>

            <GridAndCenterContainer grid columns={2} container verticalCenter>
                {/* ---------- PART 01 ---------- */}
                <SectionHowText
                    step={'01'}
                    title={SectionHowData['01'].title}
                    context={SectionHowData['01'].context}
                />
                <SectionHowImg
                    image={SectionHowAppScreen1}
                    description="iPhone app preferences selection screen"
                />
                {/* ----------------------------- */}
                {/* ---------- PART 02 ---------- */}
                <SectionHowImg
                    image={SectionHowAppScreen2}
                    description="iPhone app preferences selection screen"
                />
                <SectionHowText
                    step={'02'}
                    title={SectionHowData['02'].title}
                    context={SectionHowData['02'].context}
                />
                {/* ----------------------------- */}
                {/* ---------- PART 03 ---------- */}
                <SectionHowText
                    step={'03'}
                    title={SectionHowData['03'].title}
                    context={SectionHowData['03'].context}
                />
                <SectionHowImg
                    image={SectionHowAppScreen3}
                    description="iPhone app preferences selection screen"
                />
                {/* ----------------------------- */}
            </GridAndCenterContainer>
        </section>
    );
};

export default SectionHow;
