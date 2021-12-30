export const formReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_FORM':
      return { ...state, show: true };
    case 'FIELD_UPDATED':
      return {
        ...state,
        [action.payload.field]: {
          value: action.payload.value,
          isValid: isFieldValid(action.payload.value),
          touched: true,
        },
        isValid:
          state.name.isValid &&
          state.address.isValid &&
          state.city.isValid &&
          state.zipCode.isValid,
      };
    case 'CLEAR_FORM':
      return defaultForm;
    default:
      return state;
  }
};

const isFieldValid = (text) => !!text.trim();

export const defaultForm = {
  show: false,
  name: {
    value: '',
    isValid: false,
    touched: false,
  },
  address: {
    value: '',
    isValid: false,
    touched: false,
  },
  zipCode: {
    value: '',
    isValid: false,
    touched: false,
  },
  city: {
    value: '',
    isValid: false,
    touched: false,
  },
  isValid: false,
};
