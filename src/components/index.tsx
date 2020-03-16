// components/indes.tsx
import React, { useReducer, useMemo } from 'react';
import reducer, { initialState, Action, ItemProps } from './reducer';
import AddItem from './AddItem';
import ItemList from './ItemList';

type ContextProps = {
    dispatch: React.Dispatch<Action>;
    items: ItemProps[];
};

export const ItemsContenxt = React.createContext<ContextProps>(null as any);

function Provider() {
    const [{ items }, dispatch] = useReducer(reducer, initialState);
    const disabled = useMemo(() => items.length >= 5, [items]);

    return (
        <ItemsContenxt.Provider value={{ dispatch, items }}>
            <AddItem disabled={disabled} />
            <ItemList />
        </ItemsContenxt.Provider>
    );
}

export default Provider;
