// components/ItemList/index.tsx
import React, { useCallback } from 'react';
import styled from 'styled-components';
import Item from './Item';
import Switch from './Switch';
import DisplayState from './DisplayState';
import { ItemProps } from '../reducer';

type Props = {
    onClick: (index: number) => void;
    items: ItemProps[];
};

function ItemList({ items, onClick }: Props) {
    const _onClick = (index: number) => useCallback(() => onClick(index), [index]);

    return (
        <>
            {items.map(({ id, name, power }, index) => (
                <List key={id}>
                    <Item>{name}</Item>
                    <DisplayState power={power} />
                    <Switch onClick={_onClick(index)} />
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
