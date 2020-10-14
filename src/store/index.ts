import { createStore } from 'vuex'
import Dynamic from "@/model/Dynamic";


export default createStore({
  state: {
    dynamicList:Array<Dynamic>()
  },
  mutations: {
    dynamicData(state,dynamic:Array<Dynamic>){
      state.dynamicList = dynamic
    }
  },
  actions: {
  },
  modules: {
  }
})
