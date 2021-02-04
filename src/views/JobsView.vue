<template>
  <div>
    <list-item />
    <!-- <ul class="new-list">
      <li
        class="post"
        v-for="item in this.$store.state.jobs"
        v-bind:key="item.id"
      >
        <div class="points">{{ item.type }}</div>
        <div>
          <div class="new-title">
            <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
          </div>
          <small class="link-text"
            >{{ item.time_ago }} by <a :href="item.url" target="_blank">{{ item.domain }}</a>
          </small
          >
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";

//import { fetchJobsList } from "../api/index";
export default {
  components: { ListItem },
  mixins: [ListMixin],
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  //created() {
  // fetchJobsList()
  //   .then((response) => (this.jobs = response.data))
  //   .catch((error) => console.log(error));
  //this.$store.dispatch("FETCH_JOBS");
  //},
  // created() {
  //   bus.$emit("start: spinner");
  //   this.$store
  //     .dispatch("FETCH_JOBS")
  //     .then(() => {
  //       console.log("fetched");
  //       bus.$emit("end: spinner");
  //     })
  //     .catch((error) => console.log(error));
  //   bus.$emit("end: spinner");
  // },
};
</script>

<style>
</style>