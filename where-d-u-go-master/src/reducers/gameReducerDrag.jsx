/**
 * Unselected - show a color for a state when the 
 * space has not ever been selected

Selected, hit a ship - 
show a color and icon to show that a boat was hit here

Selected, hit nothing - 
show a color and icon to show that someone selected this spot but nothing was hit

Hover - show a variation of the above states of the user is hovering over a tile

 */

const defaultState = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
];

export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'render') {
        state[action.x][action.y] = action.symbol;

        return [...state];
    }
    return state;
}