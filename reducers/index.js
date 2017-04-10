// @flow
// flow-disable-next-line
import type { fromJS as Immut } from 'immutable'

function reducer(state: Immut, action: { type: string, payload: any }) {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return state.set('playlist', action.payload.playlist)
    case 'SET_CURRENT_TRACK':
      return state.set('currentTrack', action.payload.index)
    case 'SET_ALBUM_DATA':
      return state.set('album', action.payload.data)
    default:
      return state
  }
}

export default reducer
