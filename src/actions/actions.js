import { SWITCH_ON, SWITCH_OFF, SET_COLOR, SET_INTERVAL } from './types'

//light actions
export function switchOn() {
    return { type: SWITCH_ON }
}

export function switchOff() {
    return { type: SWITCH_OFF }
}

//color actions
export function setColor(color){
    return { type: SET_COLOR, payload: color}
}

//interval actions 

export function setInterval(interval){
    return { type: SET_INTERVAL, paylod: interval}
}