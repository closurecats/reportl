export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_CLASS_ID':
      return action.payload;
    default:
      return state;
  }
}
