// components/ItemList/DisplayState.tsx
import React from 'react';

type Props = {
    power: boolean;
};

const styles = {
    width: '45px',
};

function DisplayState({ power }: Props) {
    return <div style={styles}>{power ? 'ON' : 'OFF'}</div>;
}

export default React.memo(DisplayState);
