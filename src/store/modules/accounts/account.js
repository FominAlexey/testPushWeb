import {
  CLEAR_DATA,
  INIT_TOKEN_AND_ACCOUNT,
  INIT_ACCOUNT_VUEX,
} from "./account.actions";
import {
  SET_CLEAR_DATA,
  SET_DATA_TOKEN_AND_ACCOUNT,
  SET_DATA_ACCOUNT_VUEX,
  SET_INIT,
} from "./account.mutations";

const state = {
  isInitialized: false,
  isAuthorized: false,
  username: null,
  email: null,
  role: null,
  token: null,
};

const getters = {
  isInitialized: (state) => state.isInitialized,
  isAuthorized: (state) => state.isAuthorized,
  username: (state) => state.username,
  email: (state) => state.email,
  role: (state) => state.role,
  token: (state) => state.token,
};

const actions = {
  [CLEAR_DATA](context) {
    context.commit(SET_CLEAR_DATA);
    window.localStorage.clear();
  },
  [INIT_TOKEN_AND_ACCOUNT]: async (context) => {
    const token = {
      access_token: "123",
      isAuthorized: true,
      username: "aleksey",
      email: "aleksey@test.ru",
      role: "developer",
    };
    if (token) {
      context.commit(SET_DATA_TOKEN_AND_ACCOUNT, {
        token: token.access_token,
        isAuthorized: true,
        username: token.username,
        email: token.email,
        role: token.role,
      });
      context.commit(SET_INIT);
    }
  },
  [INIT_ACCOUNT_VUEX]: async (context) => {
    var dataAccountVuex = JSON.parse(localStorage.getItem("vuex")).store
      .AccountModule;
    let stateAccountVuex = {
      isInitialized: dataAccountVuex.isInitialized,
      isAuthorized: dataAccountVuex.isAuthorized,
      username: dataAccountVuex.username,
      email: dataAccountVuex.email,
      role: dataAccountVuex.role,
      token: dataAccountVuex.token,
    };
    context.commit(SET_DATA_ACCOUNT_VUEX, stateAccountVuex);
  },
};

const mutations = {
  [SET_CLEAR_DATA](state) {
    state.isInitialized = false;
    state.isAuthorized = false;
    state.isError = false;
    state.username = null;
    state.email = null;
    state.role = null;
  },
  [SET_DATA_TOKEN_AND_ACCOUNT](
    state,
    { isAuthorized, username, email, role, token }
  ) {
    state.isAuthorized = isAuthorized;
    state.username = username;
    state.email = email;
    state.role = role;
    state.token = token;
  },
  [SET_DATA_ACCOUNT_VUEX](state, vuexData) {
    state.isInitialized = vuexData.isInitialized;
    state.isAuthorized = vuexData.isAuthorized;
    state.username = vuexData.username;
    state.email = vuexData.email;
    state.role = vuexData.role;
    state.token = vuexData.token;
  },

  [SET_INIT](state) {
    state.isInitialized = true;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
