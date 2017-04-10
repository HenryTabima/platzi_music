// @flow
function reducer(state: Object, action: Object) {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return Object.assign({}, state, { playlist: action.payload.playlist })
    case 'SET_CURRENT_TRACK':
      return Object.assign({}, state, { currentTrack: action.payload.index })
    case 'SET_ALBUM_DATA':
      return Object.assign({}, state, { album: action.payload.data })
    default:
      return state
  }
}

export default reducer
