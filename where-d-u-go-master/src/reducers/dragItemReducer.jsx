export default function dragItemReducer(
    state = "", action
) {
    if (action.type === 'dragStart') {
        return action.symbol;
    }
    return [...state];
}