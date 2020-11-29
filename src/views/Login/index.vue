<template>
  <div>
    Login
    <button @click="login">登录</button>
  </div>
</template>
<script>
import { reqLogin } from "@api/user";
export default {
  neme: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
<style lang="less" scoped>
</style>