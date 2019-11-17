import { genNotes } from '../lib/notesServices'

const initNotesState = {
  notes: ''
}

// Constants for actions
const GENERATE_NOTES = 'GENERATE_NOTES'

// Action creators
const generateNotes = (notes) => ({type: GENERATE_NOTES, payload: notes})

// The reducer.
export default (state = initNotesState, action) => {
  switch (action.type) {
    case GENERATE_NOTES:
    default:
      return state
  }
}
