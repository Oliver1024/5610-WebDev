/**
 * Unselected - show a color for a state when the 
 * space has not ever been selected

Selected, hit a ship - 
show a color and icon to show that a boat was hit here

Selected, hit nothing - 
show a color and icon to show that someone selected this spot but nothing was hit

Hover - show a variation of the above states of the user is hovering over a tile

 */

import { five_horizontal_ship, two_horizontal_ship, three_vertical_ship, four_vertical_ship } from "commons/helpers"

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


five_horizontal_ship(defaultState);
two_horizontal_ship(defaultState);
three_vertical_ship(defaultState);
three_vertical_ship(defaultState);
four_vertical_ship(defaultState);

export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'click') {
        const value = state[action.x][action.y];
        if (value === '0') {
            state[action.x][action.y] = '1';

        } else if (value === 'U2') {
            state[action.x][action.y] = 'X2';
        } else if (value === 'U3') {
            state[action.x][action.y] = 'X3';
        }else if (value === 'U4') {
            state[action.x][action.y] = 'X4';
        }else if (value === 'U5') {
            state[action.x][action.y] = 'X5';
        }else if (value === '1') {
            state[action.x][action.y] = '1';
        } else if (value === 'X') {
            state[action.x][action.y] = 'X';
        }
        
        return [...state];
    }
    return state;
}