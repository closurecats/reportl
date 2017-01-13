export default function (state = ['American Literature'], action) {
  switch (action.type) {
    case 'SET_SELECTED_CLASS':
      return action.payload;
    default:
      return state;
  }
}
