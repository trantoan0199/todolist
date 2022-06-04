import Axios from "axios"
import { URL_API } from "config"

const TODO_LIST_URL = `${URL_API}/list`
const getList = params => {
  return Axios.get(TODO_LIST_URL, { params })
}

const create = data => {
  return Axios.post(TODO_LIST_URL, data)
}

const deleteItem = id => {
  return Axios.delete(`${TODO_LIST_URL}/${id}`)
}

const update = data => {
  return Axios.put(`${TODO_LIST_URL}/${data.id}`, data)
}

const editStatus = data => {
  return Axios.put(`${TODO_LIST_URL}/${data.id}`, data)
}

const search = value => {
  return Axios.get(`${TODO_LIST_URL}?search=${value}`)
}

const status = value => {
  return Axios.get(`${TODO_LIST_URL}?status=${value}`)
}

export const HttpRequest = {
  getList,
  create,
  deleteItem,
  update,
  editStatus,
  search,
  status
}
