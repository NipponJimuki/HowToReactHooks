// components/ItemList/index.tsx
import React from 'react';
import styled from 'styled-components';
import Switch from './Switch';
import DisplayState from './DisplayState';
import { ItemProps } from '../reducer';

type Props = {
    onClick: (index: number) => () => void;
    items: ItemProps[];
};

function ItemList({ items, onClick }: Props) {
    return (
        <>
            {items.map(({ id, name, power }, index) => (
                <List key={id}>
                    <Item>{name}</Item>
                    <DisplayState power={power} />
                    <Switch onClick={onClick(index)} />
                </List>
            ))}
        </>
    );
}

const List = styled.div`
    width: 100%;
    display: flex;
    color: rgb(100, 100, 100);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(100, 100, 100);
`;
const Item = styled.div`
    font-size: 3rem;
    width: 30%;
`;
List.displayName = 'List';
Item.displayName = 'Item';

export default ItemList;
