import {type ChangeEvent } from 'react';

export type InputProps = {
    value: number
    onChange: (newValue: number) => void
    className?: string
}

export const Input = ({ value, onChange, className }: InputProps) => {
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value));
    };

    return (
        <input
            className={className}
            type="number"
            value={value}
            onChange={onInputChange}
        />
    );
};