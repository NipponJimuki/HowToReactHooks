// components/ItemList/DisplayState.tsx
import React from 'react';

type Props = {
    power: boolean;
};

function DisplayState({ power }: Props) {
    return <div style={{ width: '45px' }}>{power ? 'ON' : 'OFF'}</div>;
}

export default React.memo(DisplayState);
