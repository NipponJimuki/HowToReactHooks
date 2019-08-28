// components/AddItem/index.tsx
import React, { useState, useEffect, useRef } from 'react';

function AddItem() {
    const [items, addItem] = useState(['']);
    const [textValue, handleChange] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value);
    const onAddItem = (item: string) => () => addItem(prevItems => [...prevItems, item]);

    useEffect(() => {
        const onEnter = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && inputEl.current) {
                const item = inputEl.current.value;
                addItem(prevItems => [...prevItems, item]);
                handleChange('');
            }
        };

        window.addEventListener('keydown', onEnter);
        if (inputEl.current) inputEl.current.focus();

        return () => {
            window.removeEventListener('keydown', onEnter);
        };
    }, []);

    return (
        <>
            <input ref={inputEl} type="text" onChange={onHandleChange} value={textValue} />
            <button type="submit" onClick={onAddItem(textValue)}>
                追加
            </button>
            {items.join('/')}
        </>
    );
}

export default AddItem;
