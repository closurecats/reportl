export default function (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUBMITTED': {
      const token = action.payload.data.token;
      let userData = {};
      if (token) {
        userData = JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
        userData.token = token;
        window.localStorage.setItem('token', token);
      }

      return userData;
    }
    default:
      return state;
  }
}
