import ApiBase from "./api.base";
import ApiUrls from "./api.urls";

// Тут хранятся API
export default {
  Account: {
    PostLogin(data) {
      return ApiBase.post(ApiUrls.Account.PostLogin, data);
    },
  },
  Users: {
    GetUser() {
      return ApiBase.get(ApiUrls.Users.GetUser);
    },
  },

  Settings: {
    GetSettings() {
      return ApiBase.get(ApiUrls.Settings.GetSettings);
    },
  },

  Tenders: {
    GetTender() {
      return ApiBase.get(ApiUrls.Tenders.GetTender);
    },
  },
};
