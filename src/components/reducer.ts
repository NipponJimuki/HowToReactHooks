export const addItem = (payload: string) =>
    ({
        type: 'ADD_ITEM',
        payload,
    } as const);

export const reset = () =>
    ({
        type: 'RESET',
    } as const);

export const changePowerState = (payload: string) =>
    ({
        type: 'CHANGE_POWER_STATE',
        payload,
    } as const);

export interface ItemProps {
    id: string;
    name: string;
    power: boolean;
}

export type State = {
    items: ItemProps[];
};
export type Action = ReturnType<typeof addItem | typeof reset | typeof changePowerState>;

export const initialState = {
    items: [],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                items: [
                    ...state.items,
                    {
                        id: `item-index-${state.items.length}`,
                        name: action.payload,
                        power: false,
                    },
                ],
            };
        }
        case 'RESET': {
            return {
                items: [],
            };
        }
        case 'CHANGE_POWER_STATE': {
            const { items } = state;
            const index = items.findIndex(key => key.id === action.payload);
            items[index].power = !items[index].power;

            return {
                items,
            };
        }

        default: {
            const _: never = action;
            return state;
        }
    }
};

export default reducer;
