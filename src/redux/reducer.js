// const initialState = {
//   products: [],
//   isOpen: false,
// };

import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/filterSlice"
import todoListReducer from "../components/FormTable/todosSlice"

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "GET_DATA":
//       return {
//         ...state,
//         products: action.payload,
//       };
//     case "DELETE_DATA":
//       const newData = state.products.filter(
//         (todo) => todo.id !== action.payload
//       );
//       return {
//         ...state,
//         products: newData,
//       };
//     case "ADD_DATA":
//       return {
//         ...state,
//         products: [...state.products, action.payload],
//       };
//     case "EDIT_DATA":
//       const newDataEdit = state.products.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return action.payload;
//         }
//         return todo;
//       });
//       return {
//         ...state,
//         products: newDataEdit,
//       };
//     case "EDIT_STATUS":
//       const newDataStatus = state.products.map((todo) => {
//         if (todo.id === action.payload.id) {
//           todo.status = !todo.status;
//         }
//         return todo;
//       });
//       return {
//         ...state,
//         products: newDataStatus,
//       };
//     case "SEARCH_DATA_NAME":
//       const data = state.products.filter(
//         (todo) => todo.name === action.payload
//       );
//       return {
//         ...state,
//         products: data,
//       };
//     case "SORT_DATA_STATUS":
//       const fetchData = []
//       state.products.map((todo) => {
//         // if (action.payload === "All") {
//         //   return todo;
//         // } else if (action.payload === "Completer" && todo.status === true) {
//         //   return todo;
//         // } else if (action.payload === "Todo" && todo.status === false)
//         //   return todo;
//         if(todo.status) {
//           fetchData.push(todo)
//           return fetchData
//         }
//         return fetchData;

//       });
//       console.log(fetchData);
//       return state
//     default:
//       return state;
//   }
// };

// export default rootReducer;

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer
})

export default rootReducer
