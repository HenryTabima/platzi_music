// @flow
// flow-disable-next-line
import { createStore } from 'redux'
// flow-disable-next-line
import { devToolsEnhancer } from 'redux-devtools-extension'
import Immutable from 'immutable'
// flow-disable-next-line
import type { fromJS as Immut } from 'immutable'
import reducer from '../reducers'

const data = Immutable.fromJS({
  playlist: [],
  nombre: '',
  currentTrack: 0,
  album: {},
})

const storeMaker =
  (initialState: Immut = data) => createStore(reducer, initialState, devToolsEnhancer())

export default storeMaker
