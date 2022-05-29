export const SET_LIST_TODO = 'todo/SET_LIST_TODO'
export const SET_LOADING_LIST_TODO = 'todo/SET_LOADING_LIST_TODO'

export const setListTodo = (payload) => {
  return {
    type: SET_LIST_TODO,
    payload,
  };
};

export const createData = (data) => {
  return {
    type: "todoList/addData",
    payload: data,
  };
};

export const editData = (data) => {
  return {
    type: "todoList/editItem",
    payload: data,
  };
};

export const updateStatus = (status) => {
  return {
    type: "todoList/updateItem",
    payload: status,
  };
};

export const deleteData = (todoId) => {
  return {
    type: "todoList/deleteItem",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilter",
    payload: text,
  };
};

export const statusFilterChange = (value) => {
  return {
    type: "filters/statusFilterChange",
    payload: value
  }
}