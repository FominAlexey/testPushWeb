<template>
  <div>NewTenders</div>
  <v-btn @click="exit"> Выйти </v-btn>
</template>
<script>
import store from "@/store/index";
export default {
  data() {
    return {};
  },
  methods: {
    exit() {
      store.dispatch("CLEAR_DATA");
      this.$router.push("/");
    },
  },
};
</script>
