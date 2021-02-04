<template>
  <div>
    <ul class="new-list">
      <li class="post" v-for="item in listItems" v-bind:key="item.id">
        <div class="points">{{ item.points || item.type }}</div>
        <div>
          <div class="new-title">
            <a v-bind:href="item.url" target="_blank" v-if="item.domain">{{
              item.title
            }}</a>

            <router-link
              v-else=""
              v-bind:to="`item/${item.id}`"
              target="_blank"
              >{{ item.title }}</router-link
            >
          </div>

          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link
              class="link-text"
              v-bind:to="`/user/${item.user}`"
              v-if="item.user"
              >{{ item.user }}</router-link
            >
            <a :href="item.url" target="_blank" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list-item",
  // created() {
  //   //this.$store.dispatch("FETCH_NEWS");
  //   //this.$router에 있는것으로 분기처리 함
  //   //console.log(this.$route);
  //   const name = this.$route.name;
  //   if (name === "news") {
  //     return this.$store.dispatch("FETCH_NEWS");
  //   } else if (name === "ask") {
  //     return this.$store.dispatch("FETCH_ASK");
  //   } else if (name === "jobs") {
  //     return this.$store.dispatch("FETCH_JOBS");
  //   }
  // },
  computed: {
    listItems() {
      return this.$store.state.list;
      // const name = this.$route.name;
      // if (name === "news") {
      //   return this.$store.state.news;
      // } else if (name === "ask") {
      //   return this.$store.state.ask;
      // } else if (name === "jobs") {
      //   return this.$store.state.jobs;
      // }
    },
  },
};
</script>

<style>
.new-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex !important;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.new-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>