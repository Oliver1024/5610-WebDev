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


// five_horizontal_ship(defaultState);
// two_horizontal_ship(defaultState);
// three_vertical_ship(defaultState);
// three_vertical_ship(defaultState);
// four_vertical_ship(defaultState);

export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'click2') {
        let x = 0;
        let y = 0;
        let allowed = ['0', 'U2', 'U3', 'U4', 'U5']
        let found = false;
        while (found === false) {
            x = Math.floor(Math.random() * state.length);
            y = Math.floor(Math.random() * state[0].length);
            for (let i = 0; i < allowed.length; i++) {
                if (state[x][y] === allowed[i]) {
                    found = true;
                    break;
                }
                if (found === true) break;
            }
        }

        const value = state[x][y];
        if (value === '0') {
            state[x][y] = '1';

        } else if (value === 'U2') {
            state[x][y] = 'X2';
        } else if (value === 'U3') {
            state[x][y] = 'X3';
        } else if (value === 'U4') {
            state[x][y] = 'X4';
        } else if (value === 'U5') {
            state[x][y] = 'X5';
        } else if (value === 'X') {
            state[x][y] = 'X';
        }
        else {
            state[x][y] = '0'
        }
        let a = document.getElementsByClassName('canclick');
        for (let i = 0; i < a.length; i++) {
            a[i].style.pointerEvents = "auto";
        }
        return [...state];
    }

    else if(action.type === 'set') {
        state = action.board;
        return [...state];
    }
    return state;
}