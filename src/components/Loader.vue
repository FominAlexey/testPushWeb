<template>
  <v-overlay :model-value="value" :opacity="opacity" :scrim="false">
    <v-progress-circular indeterminate color="primary" size="64" />
  </v-overlay>
</template>

<script>
export default {
  model: {
    prop: "value",
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: Number,
      default: 1,
    },
  },
};
</script>
