import { unref, isRef, ref } from 'vue'

export const createStore = (state, actions) => {
  const store = {
    state,
    actions,
    set (prop, value) {
      let tmp = state
      prop.split('.').forEach((k, index, arr) => {
        tmp = unref(tmp)
        if (Object.hasOwnProperty.call(tmp, k)) {
          if (index === arr.length - 1)
          { isRef(tmp[k]) ? tmp[k].value = value : tmp[k] = value }
          else
          { tmp = tmp[k] }
        } else {
          throw new Error(`Invalid prop ${prop}`)
        }
      })
    },
    commit (action, ...args) {
      const func = actions[action]
      if (func) {
        return func.apply(this, args)
      } else {
        throw new Error(`Invalid action ${action}`)
      }
    }
  }

  return store
}

export const createState = state => {
  // return toRefs(reactive(state))
  // 弃用toRefs和reactive的原因是，因为vue会对reactive对象中的ref对象自动解包，导致toRef会将state中定义的customRef等自定义对象转化成普通ref
  return Object.keys(state).reduce((res, key) => {
    res[key] = ref(state[key])
    return res
  }, state)
}
