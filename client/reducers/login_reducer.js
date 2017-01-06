const parseToken = jwt => JSON.parse(window.atob(jwt.split('.')[1].replace('-', '+').replace('_', '/')));

export default function (state = { id: 0 }, action) {
  switch (action.type) {
    case 'AUTHENTICATE': {
      const token = action.payload;

      if (token) {
        const userData = parseToken(token);
        userData.token = token;
        window.localStorage.setItem('token', token);

        return userData;
      }

      window.localStorage.removeItem('token');
      return { id: 0 };
    }
    default:
      return state;
  }
}
