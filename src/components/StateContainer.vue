<template>
  <div>
    <v-container v-if="state === BASE_STATE" class="full-container">
      <slot></slot>
    </v-container>
    <v-container v-else-if="state === NODATA_STATE" class="full-container">
      <slot name="nodata">
        <div class="pt-64">
          <h2>Нет данных</h2>
        </div>
      </slot>
    </v-container>
    <v-container v-else-if="state === ERROR_STATE" class="full-container">
      <slot name="error">
        <div class="pt-64">
          <h2>Ошибка при получении данных</h2>
          <p>
            Отправьте разработчику текст ошибки из консоли или Попробуйте позже
          </p>
        </div>
      </slot>
    </v-container>
    <v-container v-else class="full-container"> </v-container>
  </div>
</template>

<script>
const BASE_STATE = 0;
const NODATA_STATE = 1;
const ERROR_STATE = 2;
const EMPTY_STATE = 3;

export default {
  data() {
    return {
      state: BASE_STATE,
      BASE_STATE: BASE_STATE,
      NODATA_STATE: NODATA_STATE,
      ERROR_STATE: ERROR_STATE,
      EMPTY_STATE: EMPTY_STATE,
    };
  },

  methods: {
    setBaseState() {
      this.state = BASE_STATE;
    },

    setNoDataState() {
      this.state = NODATA_STATE;
    },

    setErrorState() {
      this.state = ERROR_STATE;
    },

    setEmptyState() {
      this.state = EMPTY_STATE;
    },
  },
};
</script>
