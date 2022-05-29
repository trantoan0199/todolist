import { HttpRequest } from "../util/helper"
import {
  createData,
  deleteData,
  editData,
  updateStatus,
  setListTodo
} from "./actions"

export const fetchListTodo = async dispatch => {
  const res = await HttpRequest.getList()
  dispatch(setListTodo(res.data))
}

export const addData = async (dispatch, data) => {
  try {
    const res = await HttpRequest.create(data)
    dispatch(createData(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteDataApi = async (dispatch, id) => {
  await HttpRequest.deleteItem(id)
  dispatch(deleteData(id))
}

export const editDataApi = async (dispatch, data) => {
  await HttpRequest.update(data)
  dispatch(editData(data))
}

export const editStatusApi = async (dispatch, data) => {
  await HttpRequest.editStatus(data)
  dispatch(updateStatus(data))
}
