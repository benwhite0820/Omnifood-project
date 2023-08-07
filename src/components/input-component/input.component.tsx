import './input.style.scss';

type Props =
    | {
          type: 'text' | 'email';
          label: string;
          id: string;
          options?: Array<{ optionValue: string; optionName: string }>;
          placeholder?: string;
          required?: boolean;
      }
    | {
          type: 'options';
          label: string;
          id: string;
          options: Array<{ optionValue: string; optionName: string }>;
          required?: boolean;
          placeholder?: string;
      };

const Input = ({
    type,
    label,
    id,
    options,
    required = false,
    placeholder,
}: Props) => {
    return type === 'options' ? (
        <div className="select-container">
            <label htmlFor={id}>{label}</label>
            <select id={id} required={required}>
                <option value="">Please choose one option:</option>
                {options?.map(({ optionValue, optionName }) => (
                    <option value={optionValue} key={optionValue}>
                        {optionName}
                    </option>
                ))}
            </select>
        </div>
    ) : (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default Input;
