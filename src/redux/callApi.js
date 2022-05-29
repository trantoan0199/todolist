import { HttpRequest } from "../util/helper";
import {
  createData,
  deleteData,
  editData,
  updateStatus,
  setListTodo,
} from "./actions";

export const fetchListTodo = async (dispatch) => {
  const res = await HttpRequest.getList();
  console.log(res,'api list dodo');
  dispatch(setListTodo(res.data));
};

export const addData = async (dispatch, data) => {
  try {
    const res = await HttpRequest.create("/list", data);
    dispatch(createData(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteDataApi = async (dispatch, id) => {
  await HttpRequest.deleteItem("/list", id);
  dispatch(deleteData(id));
};

export const editDataApi = async (dispatch, data) => {
  await HttpRequest.update("/list", data.id, data);
  dispatch(editData(data));
};

export const editStatusApi = async (dispatch, data) => {
  await HttpRequest.editStatus("/list", data.id, data);
  dispatch(updateStatus(data));
};
