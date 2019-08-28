// components/AddItem/index.tsx
import React, { useState, useEffect, useRef } from 'react';

type Props = {
    onAdd: (value: string) => void;
    onReset: () => void;
    disabled: boolean;
};

function AddItem({ onAdd, onReset, disabled }: Props) {
    const [textValue, handleChange] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);
    const resetText = () => handleChange('');
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value);
    const onAddItem = () => {
        if (textValue) {
            onAdd(textValue);
            resetText();
        }
    };

    useEffect(() => {
        const onEnter = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && inputEl.current) {
                const item = inputEl.current.value;
                if (item) {
                    onAdd(item);
                    handleChange('');
                }
            }
        };

        window.addEventListener('keydown', onEnter);
        if (inputEl.current) inputEl.current.focus();

        return () => {
            resetText();
            window.removeEventListener('keydown', onEnter);
        };
    }, [disabled, onAdd]);

    return (
        <>
            <input
                ref={inputEl}
                type="text"
                onChange={onHandleChange}
                disabled={disabled}
                value={textValue}
            />
            <button type="submit" onClick={onAddItem} disabled={disabled}>
                追加
            </button>
            {disabled && (
                <button type="button" onClick={onReset}>
                    リセット
                </button>
            )}
        </>
    );
}

export default AddItem;
