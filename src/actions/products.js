import axios from 'axios';
import {AsyncStorage} from 'react-native';

// const token = window.localStorage.getItem('token');
// const [token, setToken] = '';

// AsyncStorage.getItem('token').then(value => setToken(value));

export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`/products`),
  };
};

// export const getProductsAuth = (sort, sortBy, limit, page, key) => {
//   return {
//     type: 'GET_PRODUCTS_AUTH',
//     payload: Axios.get(
//       `/products?sort=${sort}&sortBy=${sortBy}&limit=${limit}&page=${page}&key=${key}`,
//       {
//         headers: {
//           auth: token,
//         },
//       },
//     ),
//   };
// };

export const getProductById = productid => {
  return {
    type: 'GET_PRODUCT_BY_ID',
    payload: axios.get(`/products/${productid}`),
  };
};

// export const addQty = productid => {
//   return {
//     type: 'ADD_PRODUCT_QTY',
//     payload: Axios.patch(
//       `http://localhost:4000/products/qty/add/1/${productid}`,
//       {
//         headers: {
//           auth: token,
//         },
//       },
//     ),
//   };
// };

// export const reduceQty = productid => {
//   return {
//     type: 'ADD_PRODUCT_QTY',
//     payload: Axios.patch(
//       `http://localhost:4000/products/qty/reduce/1/${productid}`,
//       {
//         headers: {
//           auth: token,
//         },
//       },
//     ),
//   };
// };

export const addProduct = data => {
  return {
    type: 'ADD_PRODUCT',
    payload: axios.post('/products/users', data),
  };
};

export const deleteProduct = productid => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete(
      `/products/users/${productid}`,
    ),
  };
};

export const editProduct = (productid, data) => {
  return {
    type: 'EDIT_PRODUCT',
    payload: axios.put(
      `/products/users/${productid}`,
      data,
    ),
  };
};
