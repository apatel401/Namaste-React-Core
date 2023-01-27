import React, { useContext } from "react";
import { Formik } from "formik";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useOutletContext();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        !values.email
          ? (errors.email = "Required")
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ? (errors.email = "Invalid email address")
          : values.password.length < 6
          ? (errors.password = "Password must be 6 or more charecters")
          : null;
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
setLoggedIn(true)
        navigate('/');
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="formik-form">
          <div className="form-label">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </div>
          <div className="form-label">
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Login;
