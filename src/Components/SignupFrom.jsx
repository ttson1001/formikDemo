import "./signup.css";
import * as Yup from "yup";
import { useFormik } from "formik";
const SignupFrom = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 chareacters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number "
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);

  return (
    <>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          // lệnh của formik
          value={formik.values.name}
          onChange={formik.handleChange}
          //
          placeholder="Enter your name"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label> Email address</label>
        <input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChangeCapture={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}
        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChangeCapture={formik.handleChange}
          placeholder="Confirm your password"
        />
        
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChangeCapture={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}

        <button type="submit"> Continue </button>
      </form>
    </>
  );
};

export default SignupFrom;
