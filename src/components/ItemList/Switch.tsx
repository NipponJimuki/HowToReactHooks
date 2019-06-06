// components/ItemList/Switch.tsx
import React from 'react';

type Props = {
    onClick: () => void;
};

function Switch({ onClick }: Props) {
    return <button onClick={onClick}>スイッチ</button>;
}

export default React.memo(Switch, () => true);
