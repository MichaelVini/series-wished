import * as types from './mutations-types'

export const ActionSetUser = (context, payload) => {
  // Function commit: Should call mutation and to define payload
  context.commit(types.SET_USER, payload)
}
