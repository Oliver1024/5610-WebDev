export default function clickReducer(
    state = 0, action
) {
    if (action.symbol === '0') {
        return state + 1;
    } else if (action.symbol === '1') {
        return state - 1;
    }
    return state;
}