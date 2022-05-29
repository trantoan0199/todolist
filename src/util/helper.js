import Axios from "axios"
import { URL_API } from "../config"

const TODO_LIST_URL = `${URL_API}/list`
const getList = () => {
  return Axios.get(TODO_LIST_URL)
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

const search = (url, value) => {
  return Axios.get(`${URL_API}${url}?search=${value}`)
}

const sortName = url => {
  return Axios.get(`${URL_API}${url}?sortBy=name&order=asc`)
}

export const HttpRequest = {
  getList,
  create,
  deleteItem,
  update,
  editStatus,
  search,
  sortName
}
