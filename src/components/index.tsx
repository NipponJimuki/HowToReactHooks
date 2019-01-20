// components/indes.tsx
import React, { useReducer, useMemo } from 'react';
import reducer, { initialState, Action } from './reducer';
import AddItem from './AddItem';
import ItemList from './ItemList';

export const ItemsContenxt = React.createContext<React.Dispatch<Action>>(() => []);

function Provider() {
    const [{ items }, dispatch] = useReducer(reducer, initialState);
    const disabled = useMemo(() => items.length >= 5, [items]);

    return (
        <ItemsContenxt.Provider value={dispatch}>
            <AddItem disabled={disabled} />
            <ItemList items={items} />
        </ItemsContenxt.Provider>
    );
}

export default Provider;
