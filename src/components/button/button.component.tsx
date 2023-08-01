import './button.style.scss';

type Props = {
    children: React.ReactNode;
    className?: string;
    buttonType: 'primary' | 'normal';
};

const Button = ({ children, className = '', buttonType }: Props) => {
    return <a className={`btn ${className} ${buttonType}`}>{children}</a>;
};

export default Button;
