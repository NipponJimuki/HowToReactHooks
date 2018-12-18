// components/ItemList/Item.tsx
import React from 'react';
import styled from 'styled-components';

function ItemName(props: { children: string }) {
    return <Item>{props.children}</Item>;
}

const Item = styled.div`
    font-size: 3rem;
    width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
Item.displayName = 'Item';

export default React.memo(ItemName);
