import {
  ADD_DATA_TODO,
  DELETE_DATA_TODO,
  EDIT_DATA_TODO,
  EDIT_STATUS_TODO,
  SET_LIST_TODO,
  SET_TOTAL_LIST_DODO
} from "redux/actions"

const initialState = {
  list: [],
  total: 0,
  loading: false
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_TODO:
      return {
        ...state,
        list: action.payload
      }
    case SET_TOTAL_LIST_DODO:
      return {
        ...state,
        total: action.payload
      }
    case ADD_DATA_TODO:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case DELETE_DATA_TODO:
      const newData = state.list.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        list: newData
      }
    case EDIT_DATA_TODO:
      const newDataEdit = state.list.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
      return {
        ...state,
        list: newDataEdit
      }
    case EDIT_STATUS_TODO:
      const newEditStatus = state.list.map(todo => {
        if (todo.id === action.payload.id) {
          todo.status = !todo.status
          return todo
        }
        return todo
      })
      return {
        ...state,
        list: newEditStatus
      }
    default:
      return state
  }
}

export default todoListReducer
