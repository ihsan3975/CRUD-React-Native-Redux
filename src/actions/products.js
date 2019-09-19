import axios from 'axios';

// const token = window.localStorage.getItem('token');

export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`http://192.168.1.18:4000/products`),
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
    payload: axios.get(`http://192.168.1.18:4000/products/${productid}`),
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
    payload: axios.post('http://192.168.1.18:4000/products/users', data),
  };
};

export const deleteProduct = productid => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete(
      `http://192.168.1.18:4000/products/users/${productid}`,
    ),
  };
};

export const editProduct = (productid, data) => {
  return {
    type: 'EDIT_PRODUCT',
    payload: axios.put(
      `http://192.168.1.18:4000/products/users/${productid}`,
      data,
    ),
  };
};
