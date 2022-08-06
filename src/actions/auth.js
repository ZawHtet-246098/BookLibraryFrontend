import * as api from "../api";
import { signIn } from "../Slices/authorization";

export const signin = (formValues, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formValues);
    dispatch(signIn(data));
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formValues, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formValues);
    console.log(data);
    dispatch(signIn(data));
  } catch (error) {
    console.log(error);
  }
};
