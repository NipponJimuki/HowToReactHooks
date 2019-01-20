// components/ItemList/Item.tsx
import React from 'react';
import styled from 'styled-components';

function Item({ children }: { children: string }) {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    font-size: 3rem;
    width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
Container.displayName = 'Container';

export default React.memo(Item);
