export default function winReducer(
    state = 0, action
) {
    if (action.type === 'click') {
        console.log(action.symbol)
        if (action.symbol === 'U2' || action.symbol === 'U3' || action.symbol === 'U4' || action.symbol === 'U5') {
            state += 1
            console.log(state)
            return state;
        }
    }
    return state;
}