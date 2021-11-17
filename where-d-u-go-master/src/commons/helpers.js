export const five_horizontal_ship = (state) => {
    let _x = 0;
    let _y = 0;
    while (true) {

        let dummy = true;
        _x = dummy === true ? Math.floor(Math.random() * state.length) : 0;
        _y = dummy === true ? Math.floor(Math.random() * state.length) : 0;

        let all_accept = true;
        for (let j = 0; j < 5; j++) {
            all_accept = (_y + j >= state[0].length || state[_x][_y + j] !== "0") ? false : true;
            if (all_accept === false) { break }

        }
        if (all_accept === true) {
            break;
        }
    }

    for (let k = _y; k < _y + 5; k++) {
        state[_x][k] = "U5";
    }
}

export const two_horizontal_ship = (state) => {
    let _x = 0;
    let _y = 0;
    while (true) {

        let dummy = true;
        _x = dummy === true ? Math.floor(Math.random() * state.length) : 0;
        _y = dummy === true ? Math.floor(Math.random() * state.length) : 0;

        let all_accept = true;
        for (let j = 0; j < 2; j++) {
            all_accept = (_y + j >= state[0].length || state[_x][_y + j] !== "0") ? false : true;
            if (all_accept === false) { break }

        }
        if (all_accept === true) {
            break;
        }
    }

    for (let k = _y; k < _y + 2; k++) {
        state[_x][k] = "U2";
    }
}

export const three_vertical_ship = (state) => {
    let _x = 0;
    let _y = 0;
    while (true) {

        let dummy = true;
        _x = dummy === true ? Math.floor(Math.random() * state.length) : 0;
        _y = dummy === true ? Math.floor(Math.random() * state.length) : 0;

        let all_accept = true;
        for (let j = 0; j < 3; j++) {
            all_accept = (_x + j >= state.length || state[_x + j][_y] !== "0") ? false : true;
            if (all_accept === false) { break }
        }
        if (all_accept === true) {
            break;
        }
    }

    for (let k = _x; k < _x + 3; k++) {
        state[k][_y] = "U3";
    }
}

export const four_vertical_ship = (state) => {
    let _x = 0;
    let _y = 0;
    while (true) {

        let dummy = true;
        _x = dummy === true ? Math.floor(Math.random() * state.length) : 0;
        _y = dummy === true ? Math.floor(Math.random() * state.length) : 0;

        let all_accept = true;
        for (let j = 0; j < 4; j++) {
            all_accept = (_x + j >= state.length || state[_x + j][_y] !== "0") ? false : true;
            if (all_accept === false) { break }
        }
        if (all_accept === true) {
            break;
        }
    }

    for (let k = _x; k < _x + 4; k++) {
        state[k][_y] = "U4";
    }
}

