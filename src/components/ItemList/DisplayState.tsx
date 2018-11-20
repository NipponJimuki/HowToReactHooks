// components/ItemList/DisplayState.tsx
import React from 'react';

type Props = {
    power: boolean;
};

function DisplayState({ power }: Props) {
    return <div>{power ? 'ON' : 'OFF'}</div>;
}

export default DisplayState;
