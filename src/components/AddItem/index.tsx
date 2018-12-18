// components/AddItem/index.tsx
import React, { useState, useEffect, useRef } from 'react';

function AddItem() {
    const [items, addItem] = useState(['']);
    const [textValue, handleChange] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const onEnter = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && inputEl.current) {
                const item = inputEl.current.value;
                addItem(prevItems => [...prevItems, item]);
                handleChange('');
            }
        };

        window.addEventListener('keydown', onEnter);
        if (inputEl.current) {
            inputEl.current.focus();
        }
        return () => {
            window.removeEventListener('keydown', onEnter);
        };
    }, []);

    const _onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value);
    const _onAddItem = (item: string) => () => addItem(prevItems => [...prevItems, item]);

    return (
        <>
            <input ref={inputEl} type="text" onChange={_onHandleChange} value={textValue} />
            <button onClick={_onAddItem(textValue)}>追加</button>
            {items.join('/')}
        </>
    );
}

export default AddItem;
