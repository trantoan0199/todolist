import Axios from 'axios';
import { URL_API } from '../config'

const TODO_LIST_URL = `${URL_API}/list`
const getList = () => {
    return Axios.get(TODO_LIST_URL)
}

const create = (url, data) => {
    return Axios.post(`${URL_API}${url}`, data)
}

const deleteItem = (url, id) => {
    return Axios.delete(`${URL_API}${url}/${id}`)
}

const update = (url, id, data) => {
    return Axios.put(`${URL_API}${url}/${id}`, data)
}

const editStatus = (url, data) => {
    return Axios.put(`${URL_API}${url}/${data.id}`, data)
}

const search = (url, value) => {
    return Axios.get(`${URL_API}${url}?search=${value}`)
}

const sortName = (url) => {
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