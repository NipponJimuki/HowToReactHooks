// components/ItemList/Switch.tsx
import React, { useCallback, useContext } from 'react';
import { changePowerState } from '../reducer';
import { ItemsContenxt } from '..';

type Props = {
    id: string;
};

function Switch({ id }: Props) {
    const { dispatch } = useContext(ItemsContenxt);
    const onClick = useCallback(() => {
        dispatch(changePowerState(id));
    }, [id, dispatch]);

    return (
        <button type="button" onClick={onClick}>
            スイッチ
        </button>
    );
}

export default React.memo(Switch);
