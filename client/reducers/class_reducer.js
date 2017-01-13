export default function (state = [], action) {
  switch (action.type) {
    case 'CLASS_CREATED':
      return action.payload.data;
    default:
      return state;
  }
}
