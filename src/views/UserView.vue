<template>
  <div>
    <!-- <div>name : {{ userInfo.id }}</div>
    <div>karma : {{ userInfo.karma }}</div>
    <div>created : {{ userInfo.created }}</div> -->
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ "Joined " + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: { UserProfile },
  //computed 속성 공식문서에 의해 life cycle 위에 위치
  //코드 축약
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },

  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    //인자를 userName 한개만 넘어갈수 있음(payload)
    //여러개일 경우, 객체로 감싸서 넘겨줘야 함
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style>
</style>