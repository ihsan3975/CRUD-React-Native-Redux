import axios from 'axios';

export const login = data => {
  return {
    type: 'LOGIN',
    payload: axios.post('http://192.168.1.18:4000/login', data),
  };
};

export const register = data => {
  return {
    type: 'REGISTER',
    payload: axios.post('http://192.168.1.18:4000/register', data),
  };
};
// export const getProfile = () => {
//     return{
//         type: 'GET_PROFILE',
//         payload: Axios.get('http://localhost:4000/users/profile', {
//             headers:{
//                 auth: window.localStorage.getItem("token")
//             }
//         })
//     }
// }
