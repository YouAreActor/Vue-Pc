import Mock from "mockjs"
import banners from "./rbanners.json"
import floors from "./rfloors.json"
//一旦运行就会拦截Get请求，请求地址就是/mock/banners
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners
}),
  Mock.mock("/mock/floors", "get", {
    code: 200,
    "data|3-5": floors
  })