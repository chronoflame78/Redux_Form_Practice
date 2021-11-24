import FormActionTypes from "./form.types";

const INITIAL_STATE = {
    data: {
        firstName: 'Nhat',
        lastName: 'Nguyen',
        valueA: 2,
        valueB: 3
    }
};

const customFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FormActionTypes.LOAD:
        return {
          data: action.data,
        };
      default:
        return state;
    }
  };

export default customFormReducer;