const defaultState = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '4', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '5', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
];


export default function dragReducer(
    state = defaultState, action
) {
    if (action.type === 'dragEnd') {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state[0].length; j++) {
                if (state[i][j] === action.symbol) state[i][j] = "0";
            }
        }
        state[action.x][action.y] = action.symbol;
        return [...state];
    }
    return state;
}