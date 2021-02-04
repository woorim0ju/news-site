<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-desc">
      <!-- <div v-if="this.$route.name === 'item'"> {{ info.id }} </div> <div v-else>
            {{ info.user }} </div> -->
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  // computed: {     userInfo() {       return this.$store.state.user;     },   },
};
</script>

<style></style>