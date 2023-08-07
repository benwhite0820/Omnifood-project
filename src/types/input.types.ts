export type InputProps = {
    type: 'text' | 'email';
    label: string;
    id: string;
    options?: Array<{ optionValue: string; optionName: string }>;
    placeholder?: string;
    required?: boolean;
};

export type SelectOptionsProps = {
    type: 'options';
    label: string;
    id: string;
    options: Array<{ optionValue: string; optionName: string }>;
    required?: boolean;
    placeholder?: string;
};
