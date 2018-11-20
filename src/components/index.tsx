// components/indes.tsx
import React from 'react';
import { useReducer, useMemo, useCallback } from './reactHooksAPI';
import reducer, { initialState, addItem, reset, changePowerState } from './reducer';
import AddItem from './AddItem';
import ItemList from './ItemList';

function App() {
    const [{ items }, dispatch] = useReducer(reducer, initialState);
    const onAddItem = (item: string) => dispatch(addItem(item));
    const onChangePower = (index: number) => () => dispatch(changePowerState(index));
    const disabled = useMemo<boolean>(() => items.length >= 5, [items]);
    const onReset = useCallback(
        () => {
            if (disabled) dispatch(reset());
        },
        [disabled],
    );

    return (
        <>
            <AddItem onAdd={onAddItem} onReset={onReset} disabled={disabled} />
            <ItemList items={items} onClick={onChangePower} />
        </>
    );
}

export default App;
