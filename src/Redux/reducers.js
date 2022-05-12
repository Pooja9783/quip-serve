import { GET_ALL_DATA, DELETE_DATA } from "./actionType";
const initialData = {
  data: [],
  loading: true,
};

export const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: [...action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
