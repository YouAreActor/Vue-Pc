<template>
  <div class="outer">
    <header class="header">
      <div class="header-nav">
        <div class="header-nav-herder">
          <div class="header-nav-frist">
            <div class="header-nav-first-left">
              <p class="left">尚品汇欢迎您！</p>
              <p class="right">
                <span>请</span>
                <router-link to="/login"><a>登录</a></router-link>
                <router-link to="/register">
                  <a class="register">免费注册</a>
                </router-link>
              </p>
            </div>
            <div class="header-nav-first-right">
              <a href="###">我的订单</a>
              <a href="###">我的购物车</a>
              <a href="###">我的尚品汇</a>
              <a href="###">尚品汇会员</a>
              <a href="###">企业采购</a>
              <a href="###">关注尚品汇</a>
              <a href="###">合作招商</a>
              <a href="###">商家后台</a>
            </div>
          </div>
        </div>
        <div class="header-nav-frist-center">
          <h1 class="logo">
            <router-link to="/">
              <img src="./images/logo.png" alt="logo"
            /></router-link>
          </h1>
          <div class="search">
            <input class="ipt" type="text" />
            <button class="btn" @click="search">搜索</button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    search() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="less" scoped>
.header-nav {
  width: 1519.2px;
  height: 136px;
  .header-nav-herder {
    width: 1519.2px;
    height: 30px;
    background-color: #ccc;
    .header-nav-frist {
      width: 1200px;
      height: 30px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      .header-nav-first-left {
        text-align: center;
        width: 600px;
        line-height: 30px;
        display: flex;
        span {
          margin-right: 5px;
        }
        a {
          margin-right: 10px;
        }
        .register {
          border-left: 1px solid #b3aeae;
          padding: 0 5px;
          margin-left: 5px;
        }
      }
      .header-nav-first-right {
        text-align: center;
        line-height: 30px;
        width: 600px;
        a {
          margin: 0 10px;
          // color: red;
          border-right: 1pxc solid #000;
        }
      }
    }
  }

  .header-nav-frist-center {
    width: 1200px;
    height: 106px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 265px;
      height: 106px;
      text-align: center;
    }
    img {
      width: 175px;
      height: 56px;
      width: 175px;
      margin: 25px 45px;
    }
    .search {
      .ipt {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0px 4px;
        border: 2px solid #ea4a36;
        float: left;
      }
      .btn {
        height: 32px;
        width: 68px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
        float: left;

        cursor: pointer;
      }
    }
  }
}
</style>