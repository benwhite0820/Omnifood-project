import Input from '@components/input-component/input.component';
import './sign-up-section.style.scss';
import Button from '@components/button/button.component';
// import { InputProps, SelectOptionsProps } from '../../types/input.types';

const SignUpSection = () => {
    const selectElementOptions = [
        { optionValue: 'friends', optionName: 'Friends and family' },
        { optionValue: 'youtube', optionName: 'Youtube Channel' },
        { optionValue: 'podcast', optionName: 'Podcast' },
        { optionValue: 'ad', optionName: 'Facebook ad' },
        { optionValue: 'others', optionName: 'others' },
    ];

    // const buttonGroup: Array<InputProps | SelectOptionsProps> = [
    //     {
    //         type: 'text',
    //         label: 'Full Name',
    //         placeholder: 'Ben Tsai',
    //         id: 'full-name',
    //         required: true,
    //     },
    //     {
    //         type: 'email',
    //         label: 'Email Address',
    //         placeholder: 'me@example.com',
    //         id: 'email',
    //         required: true,
    //     },
    //     {
    //         type: 'options',
    //         options: selectElementOptions,
    //         label: 'Where did you hear from us',
    //         id: 'select-from',
    //         required: true,
    //     },
    // ];

    return (
        <section className="sign-up-section" id="sign-up-section">
            <div className="sign-up-section--container">
                <div className="sign-up-section--text">
                    <h2>Get your first meal for free!</h2>
                    <p>
                        Healthy, tasty and hassle-free meals are waiting for
                        you. Start eating well today. You can cancel or pause
                        anytime. And the first meal is on us!
                    </p>

                    <div className="sign-up-section--text__form">
                        {/* {buttonGroup.map((item) => (
                            <Input {...item} />
                        ))} */}
                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="Ben Tsai"
                            id="full-name"
                            required
                        />

                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="me@example.com"
                            id="email"
                            required
                        />

                        <Input
                            type="options"
                            options={selectElementOptions}
                            label="Where did you hear from us"
                            required
                            id="select-from"
                        />
                        <Button buttonType="normal" className="sign-up-btn">
                            Sign Up Now
                        </Button>
                    </div>
                </div>
                <div className="sign-up-section--image" role="img"></div>
            </div>
        </section>
    );
};

export default SignUpSection;
