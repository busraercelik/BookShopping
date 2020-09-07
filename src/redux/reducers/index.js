import { data } from "../../data";

const initialState = {
  bookList: data,
  cart:[]
}

const reducer = (state=initialState, action) => {
  return state;
}

export default reducer;