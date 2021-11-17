
const defaultState = {
    className: "panel-wrapper panel-invisible",
    active: "false"
}

export default function panelReducer(
    state = defaultState, action
) {
    if (action.type === 'panel-click') {
        if (action.active === "true") {
            return {
                className: "panel-wrapper panel-visible",
                active: "false"
            }
        } else {
            return {
                className: "panel-wrapper panel-invisible",
                active: "true"
            }
        }
    } else if (action.type === "first-open") {
        return {
            className: "panel-wrapper panel-visible",
            active: "true"
        }
    }
    return state;
}