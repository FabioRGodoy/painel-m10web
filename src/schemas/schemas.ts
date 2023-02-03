import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().email("Must be a valid email").required("Required field"),
  password: yup.string().min(8).required("Required field"),
});
