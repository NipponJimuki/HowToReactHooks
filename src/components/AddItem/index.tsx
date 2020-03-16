// components/AddItem/index.tsx
import React, { useState, useEffect, useRef } from 'react';

function AddItem() {
    const [items, setItem] = useState<string[]>([]);
    const [textValue, setTextValue] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value);
    const onAddItem = (item: string) => () => setItem(prev => [...prev, item]);

    useEffect(() => {
        const onEnter = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && inputEl.current) {
                const item = inputEl.current.value;
                setItem(prevItems => [...prevItems, item]);
                setTextValue('');
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
