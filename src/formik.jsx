import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().email().required().min(12),
  password: yup.string().required().min(8),
});

export function Login() {
  const {handleSubmit, handleBlur, handleChange, values, touched, errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => console.log("Form values", values),
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        type="email"
        placeholder="email"
      />
      {touched.email && errors.email ? errors.email : null}
      <input
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="password"
      />
      {touched.password && errors.email ? errors.password : null}
      <button type="submit">Submit</button>
    </form>
  );
}