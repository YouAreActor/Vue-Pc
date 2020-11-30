import request from "@utils/request"
import mockRequest from "@utils/mockRequest"

//获取三级分类的数据
export const reqGetBaseCategoryList = () => {
  return request({
    method: "GET",
    url: "product/getBaseCategoryList"
  })
}

export const reqGetBanners = () => {
  return mockRequest({
    method: "GET",
    url: "/banners"
  })
}

export const reqGetFloors = () => {
  return mockRequest({
    method: "GET",
    url: "/floors"
  })
}