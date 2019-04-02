import * as types from './mutation-types'

export const setEmail = ({ commit }, payload) => {
  commit(types.UPDATE_EMAIL, payload)
}

export const setSecretKey = ({ commit }, payload) => {
  commit(types.UPDATE_SECRET_KEY, payload)
}

export const loadSettings = ({ commit }, payload) => {
  commit(types.UPDATE_EMAIL, localStorage.getItem('email'))
  commit(types.UPDATE_SECRET_KEY, localStorage.getItem('secretKey'))
}
