import filtersReducer from "components/Filters/filterSlice"
import todoListReducer from "components/FormTable/todosSlice"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer
})

export default rootReducer
