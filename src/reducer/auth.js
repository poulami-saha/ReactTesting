import { CHANGE_AUTH } from "../action/type";

// export default function(state = false, action) {
//   switch (action.type) {
//     case CHANGE_AUTH:
//       return action.payload;
//     default:
//       return state;
//   }
// }

const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
