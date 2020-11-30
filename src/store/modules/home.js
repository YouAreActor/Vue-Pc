//home组件的Vuex状态
import { reqGetBaseCategoryList, reqGetBanners, reqGetFloors } from "@api/home"


export default {
  state: {
    categoryList: [],
    banners: [],//模拟轮播图数据
    floors: [],//
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      //调用api home中的方法请求数据并将数据赋值给到categoryList
      const categoryList = await reqGetBaseCategoryList()
      commit("GET_CATEGORY_LIST", categoryList)
    },
    async getBanners({ commit }) {
      const banners = await reqGetBanners();
      commit("GET_BANNERS", banners)
    },
    async getFloors({ commit }) {
      const floors = await reqGetFloors();
      commit("GET_FLOORS", floors)
    }


  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList
    },
    GET_BANNERS(state, banners) {
      state.banners = banners
    },
    GET_FLOORS(state, floors) {
      state.floors = floors
    }

  }
}

/* export default {
  state: {
    categoryList: [],
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      const categoryList = await reqGetBaseCategoryList();
      commit("GET_CATEGORY_LIST", categoryList)
    }
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList
    }
  }
} */