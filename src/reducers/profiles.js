import { create, update, destroy, get, getAll } from '../lib/profileServices.js'

const initState = {
  profile: {
    numBeats: 0,
    beatsPerMeasure: 0
  }
}

// Constants for actions
const ACTIVE_NUMBEATS = 'ACTIVE_NUMBEATS'
const ACTIVE_BEATS_MEAS = 'ACTIVE_BEATS_MEAS'
export const PROFILE_ADD = 'PROFILE_CREATE'
export const PROFILE_CHANGE = 'PROFILE_UPDATE'
export const PROFILE_REMOVE = 'PROFILE_DESTROY'
export const PROFILE_LOAD = 'PROFILE_GET'
export const PROFILES_LOADALL = 'PROFILES_GETALL'

// Action creators
export const updActvNumbeats = (value) => ({type: ACTIVE_NUMBEATS, payload: value})
export const updActvBeatsMeasure = (value) => ({type: ACTIVE_BEATS_MEAS, payload: value})
export const addProfile = (profile) => ({type: PROFILE_ADD, payload: profile})
export const chgProfile = (profile) => ({type: PROFILE_CHANGE, update: profile})
export const remProfile = (id) => ({type: PROFILE_REMOVE, payload: id})
export const loadProfile = (profile) => ({type: PROFILE_LOAD, payload: profile})
export const loadAllProfiles = (allProfiles) => ({type: PROFILES_LOADALL, payload: allProfiles})

export default (state = initState, action) => {
  switch (action.type) {
    case ACTIVE_NUMBEATS:
    case ACTIVE_BEATS_MEAS:
    case PROFILE_ADD:
    case PROFILE_CHANGE:
    case PROFILE_REMOVE:
    case PROFILE_LOAD:
    case PROFILES_LOADALL:
    default:
      return state
  }
}
