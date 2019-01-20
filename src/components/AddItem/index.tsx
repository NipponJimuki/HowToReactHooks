// components/AddItem/index.tsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { addItem, reset } from '../reducer';
import { ItemsContenxt } from '../';

type Props = {
    disabled: boolean;
};

function AddItem({ disabled }: Props) {
    const dispatch = useContext(ItemsContenxt);
    const [textValue, handleChange] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);
    const resetText = () => handleChange('');
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value);
    const onAddItem = () => {
        if (textValue) {
            dispatch(addItem(textValue));
            resetText();
        }
    };
    const onReset = () => dispatch(reset());

    useEffect(() => {
        const onEnter = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && inputEl.current) {
                const item = inputEl.current.value;
                if (item) {
                    dispatch(addItem(item));
                    resetText();
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
    }, [disabled]);

    return (
        <>
            <input
                ref={inputEl}
                type="text"
                onChange={onHandleChange}
                disabled={disabled}
                value={textValue}
            />
            <button onClick={onAddItem} disabled={disabled}>
                追加
            </button>
            {disabled && <button onClick={onReset}>リセット</button>}
        </>
    );
}

export default React.memo(AddItem);
