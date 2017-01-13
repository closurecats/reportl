export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_CLASS_BY_ID':
      return action.payload.data;
    default:
      return state;
  }
}
