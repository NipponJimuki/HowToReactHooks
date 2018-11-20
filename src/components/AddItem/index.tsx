// components/AddItem/index.tsx
import React from 'react';
import { useState, useEffect, useRef } from '../reactHooksAPI';

function AddItem() {
    const [items, addItem] = useState(['']);
    const [textValue, handleChange] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);
    const onEnter = (e: KeyboardEvent) => {
        if (e.keyCode === 13 && inputEl.current) {
            const item = inputEl.current.defaultValue;
            addItem(prevItems => [...prevItems, item]);
        }
    };

    useEffect(
        () => {
            window.addEventListener('keydown', onEnter);
            handleChange('');
            if (inputEl.current) {
                inputEl.current.focus();
            }
            return () => {
                window.removeEventListener('keydown', onEnter);
            };
        },
        [items],
    );

    const _onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value);
    const _onAddItem = (item: string) => () => addItem(prevItems => [...prevItems, item]);

    return (
        <div>
            <input ref={inputEl} type="text" onChange={_onHandleChange} value={textValue} />
            <button onClick={_onAddItem(textValue)}>追加</button>
            {items.join('/')}
        </div>
    );
}

export default AddItem;
