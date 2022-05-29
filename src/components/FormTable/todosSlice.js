import { SET_LIST_TODO } from "../../redux/actions";

const initialState = {
  list: [],
  loading: false,
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_TODO:
      return {
        ...state,
        list: action.payload,
      };
    case "todoList/addData":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "todoList/editItem":
      const newDataEdit = state.list.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      return {
        ...state,
        list: newDataEdit,
      };
    case "todoList/deleteItem":
      const newData = state.products.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        list: newData,
      };
    default:
      return state;
  }
};

export default todoListReducer;
