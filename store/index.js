
// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

const createdStore = () => {
  return new Vuex.Store({
    state: () => ({
      // logo: "~/assets/imgs/DevsLogoW.svg"
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    modules: {
      main: {
        namespaced: true,
        state: () => ({
          logo: "~/assets/imgs/DevsLogoW.svg"
        }),
        mutations: {
          add (state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove (state, { todo }) {
            state.list.splice(state.list.indexOf(todo), 1)
          },
          toggle (state, { todo }) {
            todo.done = !todo.done
          }
        }
      },
      teens: {
        namespaced: true,
        state: () => ({
          list: []
        }),
        mutations: {
          add (state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove (state, { todo }) {
            state.list.splice(state.list.indexOf(todo), 1)
          },
          toggle (state, { todo }) {
            todo.done = !todo.done
          }
        }
      }
    }
  })
}

export default createdStore
