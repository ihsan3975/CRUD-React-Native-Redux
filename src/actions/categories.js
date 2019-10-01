import Axios from 'axios';

// const token = window.localStorage.getItem('token');
export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
    payload: Axios.get(`http://192.168.43.83:4000/category`),
  };
};

export const deleteCategories = id => {
  return {
    type: 'DELETE_CATEGORY',
    payload: Axios.delete(`http://192.168.43.83:4000/category/users/${id}`),
  };
};

export const editCategories = (id, data) => {
  return {
    type: 'EDIT_CATEGORY',
    payload: Axios.put(`http://192.168.43.83:4000/category/users/${id}`, data),
  };
};

export const getCategoryById = id => {
  return {
    type: 'GET_CATEGORY_BY_ID',
    payload: Axios.get(`http://192.168.43.83:4000/category/${id}`),
  };
};

export const addCategory = data => {
  return {
    type: 'ADD_CATEGORY',
    payload: Axios.post(`http://192.168.43.83:4000/category/users`, data),
  };
};
