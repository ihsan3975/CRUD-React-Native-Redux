import {combineReducers} from 'redux';

import products from './products';
import users from './users';
import categories from './categories';

const rootReducers = combineReducers({
  users,
  products,
  categories,
});

export default rootReducers;
