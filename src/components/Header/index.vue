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
                <router-link to="/login">登录</router-link>
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
            <form class="searchForm" @submit.prevent="search">
              <input class="ipt" type="text" v-model="searchValue" />
              <button class="btn">搜索</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    //搜索功能 写法1
    /*  search() {
      const { searchValue } = this;
      const params = searchValue ? `/${searchValue}` : "";
      const location = "/search" + params;
      this.$router.push(location);
      // const { searchValue } = this;
      // const params = searchValue ? `/${searchValue}` : "";
      // const location = "/search" + params;
      // this.$router.push(location);
      console.log(location);
    }, */
    search() {
      //写法2
      const { searchValue } = this;
      // const params = searchValue ? `/${searchValue}` : "";
      const location = {
        name: "search",
      };
      if (searchValue) {
        location.params = {
          searchValue,
        };
      }
      //添加query参数
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }

      //this.$router.replace(location);
      //判断路径是否是search组件
      //if(this.$route.path.includes("/search"))
      //if(this.$route.path.startWith("/search"))
      //if(/^\/search/.test(this.$route.path))
      //if(this.$route.name === "search")
      if (this.$route.path.indexOf("/search") > -1) {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("clearSearchValue", () => {
      //清空searchValue
      this.searchValue = "";
    });
  },
};
</script>
<style lang="less" scoped>
.header-nav {
  width: 100%;
  height: 136px;
  .header-nav-herder {
    width: 100%;
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
        width: 50%;
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
          padding: 0 0 0 10px;
          margin-left: 5px;
        }
      }
      .header-nav-first-right {
        text-align: center;
        line-height: 30px;
        width: 50%;
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