export default class UserObject {
  id = null;
  name = null;
  email = null;
  role = null;
  gettingMail = null;
  gettingPush = null;

  constructor(user = null) {
    if (user) {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
      this.role = user.role;
      this.gettingMail = user.gettingMail;
      this.gettingPush = user.gettingPush;
    }
  }

  toDummyResponse() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      gettingMail: this.gettingMail,
      gettingPush: this.gettingPush,
    };
  }
}
