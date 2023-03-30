const BASE_URL = process.env.VUE_APP_BASE_URL;

export default {
  Account: {
    PostLogin: BASE_URL + "/Login",
  },

  Users: {
    GetUser: BASE_URL + "/1d500247-4537-4e5a-ba48-f548d95d7960",
  },

  Settings: {
    GetSettings: BASE_URL + "/234d6db5-6327-4c81-99d8-0a398918b66f",
  },

  Tenders: {
    GetTender: BASE_URL + "/a3ee2b4f-b0a1-4e1a-bc57-0bcbcc49bf55",
  },
};
