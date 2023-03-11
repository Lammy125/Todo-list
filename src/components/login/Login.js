import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });
  return (
    <div className="todoContainer">
      <NavBar />
      <div className="todoBody">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            var config = {
              method: "post",

              url: "https://authentication-authorization.onrender.com/login",
              headers: {
                "Content-Type": "application/json",
              },
              data: values,
            };

            axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast.success("Login successfully");
                localStorage.setItem("token", response.data.token);
                navigate("/");
              })
              .catch(function (error) {
                console.log(error.response.data);
                toast.error(error.response.data);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <form className="formLogin" onSubmit={handleSubmit}>
              <div>
                <h1>Sign in</h1>
                <p>Fill in your details</p>
              </div>
              <div className="details">
                <label className="infoEmail">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.email && errors.email}</span>
              </div>
              <div className="details">
                <label className="infoPassword">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.password && errors.password}</span>
              </div>
              <button className="btnDetails" type="submit">
                Log in
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
