<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{
          fetchedItem.user
        }}</router-link>
        <div slot="time">{{ "Posted " + fetchedItem.time_ago }}</div>
      </user-profile>
      <!-- <div class="user-container">
        <div><i class="fas fa-user"></i></div>
        <div class="user-desc">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>

          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <div v-html="fetchedItem.content"></div>
    <!-- <div>{{ fetchedItem.content }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    //console.log(itemId);
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>
<style>
.user-container {
  display: flex;
  align-content: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-desc {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>