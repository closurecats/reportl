export default function (state = 'John Smith', action) {
  switch (action.type) {
    case 'SET_SELECTED_USER':
      return action.payload;
    default:
      return state;
  }
}
