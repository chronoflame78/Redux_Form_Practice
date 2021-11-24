import FormActionTypes from "./form.types";

export const loadData = (data) => ({
    type: FormActionTypes.LOAD_DATA,
    payload: data
});