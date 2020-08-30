import * as yup from "yup";

export default yup.object().shape({
  user: yup.string().email("Deve ser email caraiooo").required("User invalid"),
  password: yup.string().min(8).required("Password invalid"),
});
