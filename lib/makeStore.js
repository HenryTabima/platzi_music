// @flow
// flow-disable-next-line
import { createStore } from 'redux'
// flow-disable-next-line
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from '../reducers'

const data = {
  playlist: [],
  nombre: '',
  currentTrack: 0,
  album: {},
}

const storeMaker =
  (initialState: Object = data) => createStore(reducer, initialState, devToolsEnhancer())

export default storeMaker
