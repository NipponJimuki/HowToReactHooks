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
    const reset = () => handleChange('');

    useEffect(
        () => {
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
            if (inputEl.current) {
                inputEl.current.focus();
            }
            return () => {
                reset();
                window.removeEventListener('keydown', onEnter);
            };
        },
        [disabled],
    );

    const _onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value);
    const _onAddItem = () => {
        if (textValue) {
            onAdd(textValue);
            reset();
        }
    };

    return (
        <>
            <input
                ref={inputEl}
                type="text"
                onChange={_onHandleChange}
                disabled={disabled}
                value={textValue}
            />
            <button onClick={_onAddItem} disabled={disabled}>
                追加
            </button>
            {disabled && <button onClick={onReset}>リセット</button>}
        </>
    );
}

export default React.memo(AddItem);
