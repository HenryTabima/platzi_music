import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from '../reducers'

const data = {
  playlist: [],
  nombre: '',
  currentTrack: 0,
  album: {}
}

const makeStore = (initialState = data) => createStore(reducer, initialState, devToolsEnhancer())

export default makeStore
