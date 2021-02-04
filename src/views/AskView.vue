<template>
  <div>
    <list-item />
    <!-- <ul class="new-list">
      <li class="post" v-for="item in askItems" v-bind:key="item.id">
        <div class="points">{{ item.points }}</div>
        <div>
          <div class="new-title">
            <router-link v-bind:to="`item/${item.id}`" target="_blank">{{
              item.title
            }}</router-link>
          </div>
          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
//import { fetchAskList } from "../api/index";
//import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: { ListItem },
  mixins: [ListMixin],
  // computed: {
  //   ...mapGetters({
  //     askItems: "fetchedAsk",
  //   }),
  // ask() {
  //   return this.$store.state.ask;
  // },
  //},
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  //created() {
  // fetchAskList()
  //   .then((response) => (this.ask = response.data))
  //   .catch((error) => console.log(error));
  ///\this.$store.dispatch("FETCH_ASK");
  //},
  // created() {
  //   bus.$emit("start: spinner");
  //   this.$store
  //     .dispatch("FETCH_ASK")
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