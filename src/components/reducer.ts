export const ADD_ITEM = 'ADD_ITEM';
export const RESET = 'RESET';
export const CHANGE_POWER_STATE = 'CHANGE_POWER_STATE';

export const addItem = (payload: string) => ({
    type: ADD_ITEM as typeof ADD_ITEM,
    payload,
});

export const reset = () => ({
    type: RESET as typeof RESET,
});

export const changePowerState = (payload: number) => ({
    type: CHANGE_POWER_STATE as typeof CHANGE_POWER_STATE,
    payload,
});

export interface ItemProps {
    id: string;
    name: string;
    power: boolean;
}

type State = {
    items: ItemProps[];
};
type Action = ReturnType<typeof addItem | typeof reset | typeof changePowerState>;

export const initialState = {
    items: [],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: `cele-index-${state.items.length}`,
                        name: action.payload,
                        power: false,
                    },
                ],
            };
        }
        case RESET: {
            return {
                ...state,
                items: [],
            };
        }
        case CHANGE_POWER_STATE: {
            return {
                ...state,
                items: state.items.map((cele, index) =>
                    index === action.payload ? { ...cele, power: !cele.power } : cele,
                ),
            };
        }

        default: {
            const _: never = action;
            return state;
        }
    }
};

export default reducer;
