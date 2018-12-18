// components/indes.tsx
import React, { useReducer, useMemo, useCallback } from 'react';
import reducer, { initialState, addItem, reset, changePowerState } from './reducer';
import AddItem from './AddItem';
import ItemList from './ItemList';

function App() {
    const [{ items }, dispatch] = useReducer(reducer, initialState);
    const disabled = useMemo(() => items.length >= 5, [items]);
    const onAddItem = useCallback((item: string) => dispatch(addItem(item)), []);
    const onReset = useCallback(
        () => {
            if (disabled) dispatch(reset());
        },
        [disabled],
    );
    const onChangePower = (index: number) => dispatch(changePowerState(index));

    return (
        <>
            <AddItem onAdd={onAddItem} onReset={onReset} disabled={disabled} />
            <ItemList items={items} onClick={onChangePower} />
        </>
    );
}

export default App;
