// components/AddItem/index.tsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { addItem, reset } from '../reducer';
import { ItemsContenxt } from '..';

type Props = {
    disabled: boolean;
};

function useItem() {
    const { dispatch } = useContext(ItemsContenxt);
    const [textValue, setTextValue] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value);
    const onAddItem = () => {
        if (textValue) {
            dispatch(addItem(textValue));
            setTextValue('');
        }
    };
    const onReset = () => dispatch(reset());

    useEffect(() => {
        const onEnter = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && inputEl.current) {
                const item = inputEl.current.value;
                if (item) {
                    dispatch(addItem(item));
                    setTextValue('');
                }
            }
        };

        window.addEventListener('keydown', onEnter);
        if (inputEl.current) inputEl.current.focus();
        return () => {
            dispatch(reset());
            window.removeEventListener('keydown', onEnter);
        };
        /* コンポーネントマウント時にのみ発火すればよいのでdepsを無効にする */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { textValue, inputEl, onHandleChange, onAddItem, onReset };
}

function AddItem({ disabled }: Props) {
    const { textValue, inputEl, onHandleChange, onAddItem, onReset } = useItem();

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

export default React.memo(AddItem);
