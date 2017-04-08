import { createStore } from 'redux'
import reducer from '../reducers'

const data = {
  playlist: [],
  nombre: '',
  currentTrack: 0,
  album: {}
}

const makeStore = (initialState = data) => createStore(reducer, initialState)

export default makeStore
