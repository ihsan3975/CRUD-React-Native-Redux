import Axios from 'axios';

// const token = window.localStorage.getItem('token');
export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
    payload: Axios.get(`/category`),
  };
};

export const deleteCategories = id => {
  return {
    type: 'DELETE_CATEGORY',
    payload: Axios.delete(`/category/users/${id}`),
  };
};

export const editCategories = (id, data) => {
  return {
    type: 'EDIT_CATEGORY',
    payload: Axios.put(`/category/users/${id}`, data),
  };
};

export const getCategoryById = id => {
  return {
    type: 'GET_CATEGORY_BY_ID',
    payload: Axios.get(`/category/${id}`),
  };
};

export const addCategory = data => {
  return {
    type: 'ADD_CATEGORY',
    payload: Axios.post(`/category/users`, data),
  };
};
