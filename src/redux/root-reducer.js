import { combineReducers } from "redux";

import { reducer as formReducer } from 'redux-form'

import customFormReducer from "./form/form.reducer";

const rootReducer = combineReducers({
   customFormReducer,
   form: formReducer
});

export default rootReducer;

