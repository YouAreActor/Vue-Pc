import { reqGetProductDetail } from "@api/detail"//定义detail组件的vuex状态
export default {
  state: {
    productDetail: {
      categoryView: {},//分类数据
      spuSaleAttrList: [],//商品选择属性数据列表
      skuInfo: {}//商品详情数据
    }
  },
  getters: {
    categoryView(state) {
      return state.productDetail.categoryView
    },
    spuSaleAttrList(state) {
      return state.productDetail.spuSaleAttrList
    },
    skuInfo(state) {
      return state.productDetail.skuInfo
    }
  },
  actions: {
    async getProductDetail({ commit }, id) {
      const productDetail = await reqGetProductDetail(id)
      commit("GET_PRODUCT_DETAIL", productDetail)
    }
  },
  mutations: {
    GET_PRODUCT_DETAIL(state, productDetail) {
      state.productDetail = productDetail
    }
  }
}
