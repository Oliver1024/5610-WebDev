import { combineReducers } from 'redux'
import panelReducer from 'reducers/panelReducer'
import gameReducer from 'reducers/gameReducer'
import gameReducerSingle from 'reducers/gameReducerSingle'
import gamePlayerReducer from 'reducers/gamePlayerReducer'
import gameReducerDrag from 'reducers/gameReducerDrag'
import winReducer from 'reducers/winReducer'
import dragReducer from 'reducers/dragReducer'
import dragItemReducer from 'reducers/dragItemReducer'
import winReducerNormal from 'reducers/winReducerNormal'
import winReducerNormalAI from 'reducers/winReducerNormalAI'

export default combineReducers({
    gamePlayer: gamePlayerReducer,
    click: panelReducer,
    game: gameReducer,
    gameSingle: gameReducerSingle,
    winClick: winReducer,
    dragItem: dragItemReducer,
    winClickNormal: winReducerNormal,
    winClickNormalAI: winReducerNormalAI,
    drag: gameReducerDrag
})