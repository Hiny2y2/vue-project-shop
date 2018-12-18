import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (a, b) {
      console.log(a.state.city = b)
    }
  }
})