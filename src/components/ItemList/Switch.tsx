// components/ItemList/Switch.tsx
import React from 'react';

type Props = {
    onClick: () => void;
};

function Switch({ onClick }: Props) {
    return (
        <button type="button" onClick={onClick}>
            スイッチ
        </button>
    );
}

export default Switch;
