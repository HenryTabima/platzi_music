// @flow
// flow-disable-next-line
import { createStore } from 'redux'
import reducer from '../reducers'

const data = {
  playlist: [],
  nombre: 'leonidas',
  currentTrack: 0,
  album: {},
}
const makeStore = (initialState: Object = data) => createStore(reducer, initialState)

export default makeStore
