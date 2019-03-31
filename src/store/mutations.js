import * as types from './mutation-types'

export default {
  [types.UPDATE_EMAIL] (state, payload) {
    state.email = payload
  },
  [types.UPDATE_SECRET_KEY] (state, payload) {
    state.secretKey = payload
  },
}
