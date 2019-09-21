const initState = {
  categoryList: [],
  errMessage: '',
  message: '',
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const category = (state = initState, action) => {
  switch (action.type) {
    case `GET_CATEGORIES_PENDING`:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case `GET_CATEGORIES_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case `GET_CATEGORIES_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: action.payload,
      };
    case 'DELETE_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'DELETE_CATEGORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: initState.categoryList.filter(categories => {
          return categories.id !== action.payload.data.data.id;
        }),
      };
    case 'EDIT_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'EDIT_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'EDIT_CATEGORY_FULFILLED':
      const newCategoryData = action.payload.data.data[0];
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: initState.categoryList.map(categories => {
          return categories.categoryid === newCategoryData.categoryid
            ? newCategoryData
            : categories;
        }),
      };

    case 'GET_CATEGORY_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_CATEGORY_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'GET_CATEGORY_BY_ID_FULFILLED':
      // state.productList.push(action.payload.data.data[0])
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: action.payload,
      };
    case 'ADD_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'ADD_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMessage: action.payload.response.data.message,
      };
    case 'ADD_CATEGORY_FULFILLED':
      initState.categoryList.unshift(action.payload.data.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    default:
      return state;
  }
};

export default category;
