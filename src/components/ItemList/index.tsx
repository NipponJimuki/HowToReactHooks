// components/ItemList/index.tsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import Item from './Item';
import Switch from './Switch';
import DisplayState from './DisplayState';
import { ItemsContenxt } from '..';

function ItemList() {
    const { items } = useContext(ItemsContenxt);

    return (
        <>
            {items.map(({ id, name, power }) => (
                <List key={id}>
                    <Item>{name}</Item>
                    <DisplayState power={power} />
                    <Switch id={id} />
                </List>
            ))}
        </>
    );
}

const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    color: rgb(100, 100, 100);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(100, 100, 100);
`;
List.displayName = 'List';

export default ItemList;
