// components/ItemList/Switch.tsx
import React, { useCallback } from 'react';

type Props = {
    onClick: () => void;
};

function Switch({ onClick }: Props) {
    return <button onClick={onClick}>スイッチ</button>;
}

export default Switch;
