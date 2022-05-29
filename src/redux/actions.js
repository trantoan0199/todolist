export const SET_LIST_TODO = "todo/SET_LIST_TODO"
export const SET_LOADING_LIST_TODO = "todo/SET_LOADING_LIST_TODO"
export const ADD_DATA_TODO = "todo/ADD_DATA_TODO"
export const DELETE_DATA_TODO = "todo/DELETE_DATA_TODO"
export const EDIT_DATA_TODO = "todo/EDIT_DATA_TODO"
export const EDIT_STATUS_TODO = "todo/EDIT_STATUS_TODO"

export const setListTodo = payload => {
  return {
    type: SET_LIST_TODO,
    payload
  }
}

export const createData = data => {
  return {
    type: ADD_DATA_TODO,
    payload: data
  }
}

export const deleteData = todoId => {
  return {
    type: DELETE_DATA_TODO,
    payload: todoId
  }
}

export const editData = data => {
  return {
    type: EDIT_DATA_TODO,
    payload: data
  }
}

export const updateStatus = status => {
  return {
    type: EDIT_STATUS_TODO,
    payload: status
  }
}

export const searchFilterChange = text => {
  return {
    type: "filters/searchFilter",
    payload: text
  }
}

export const statusFilterChange = value => {
  return {
    type: "filters/statusFilterChange",
    payload: value
  }
}
