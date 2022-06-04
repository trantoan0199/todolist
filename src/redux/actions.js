export const SET_LIST_TODO = "todo/SET_LIST_TODO"
export const SET_TOTAL_LIST_DODO = "todo/SET_TOTAL_LIST_DODO"
export const SET_LOADING_LIST_TODO = "todo/SET_LOADING_LIST_TODO"
export const ADD_DATA_TODO = "todo/ADD_DATA_TODO"
export const DELETE_DATA_TODO = "todo/DELETE_DATA_TODO"
export const EDIT_DATA_TODO = "todo/EDIT_DATA_TODO"
export const EDIT_STATUS_TODO = "todo/EDIT_STATUS_TODO"
export const SEARCH_NAME_FILTER = "filter/SEARCH_NAME_FILTER"
export const STATUS_NAME_FILTER = "filter/STATUS_NAME_FILTER"

export const setListTodo = payload => {
  return {
    type: SET_LIST_TODO,
    payload
  }
}

export const setTotalListTodo = value => {
  return {
    type: SET_TOTAL_LIST_DODO,
    payload: value
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
    type: SEARCH_NAME_FILTER,
    payload: text
  }
}

export const statusFilterChange = value => {
  return {
    type: STATUS_NAME_FILTER,
    payload: value
  }
}
