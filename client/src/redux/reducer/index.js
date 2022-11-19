const initialState = {
  allProperties: [],
  properties: [],
  image: [],
  detail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PROPERTIES":
      return {
        ...state,
        allProperties: action.payload,
        properties: [action.payload],
      };
    case "image":
      return {
        ...state,
        image: [action.payload],
      };

    default:
      return state;
  }
}
