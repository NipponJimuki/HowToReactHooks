// components/ItemList/index.tsx
import React from 'react';
import { useState } from '../reactHooksAPI';
import Switch from './Switch';
import DisplayState from './DisplayState';

function Main() {
    const [power, changePowerState] = useState(false);

    return (
        <div>
            <Switch onClick={() => changePowerState(!power)} />
            <DisplayState power={power} />
        </div>
    );
}

export default Main;
