import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    confirm: yup
      .string()
      .oneOf([yup.ref("pass"), null], 'Must match "password" field value'),
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

              url: "https://authentication-authorization.onrender.com/register",
              headers: {
                "Content-Type": "application/json",
              },
              data: values,
            };

            axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast.success("Register successfully");
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
            <form className="formRegister" onSubmit={handleSubmit}>
              <div>
                <h1>Sign up</h1>
                <p>Fill in your details</p>
              </div>
              <div className="details">
                <label className="info">First Name</label>
                <input
                  type="text"
                  value={values.first_name}
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.first_name && errors.first_name}</span>
              </div>
              <div className="details">
                <label className="info">Last Name</label>
                <input
                  type="text"
                  value={values.last_name}
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.last_name && errors.last_name}</span>
              </div>
              <div className="details">
                <label className="infoEmail">Email</label>
                <input
                  type="email"
                  value={values.email}
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.email && errors.email}</span>
              </div>
              <div className="details">
                <label className="infoPassword">Password</label>
                <input
                  type="password"
                  value={values.password}
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.password && errors.password}</span>
              </div>
              <div className="details">
                <label className="infoPasswordConfirm">Confirm Password</label>
                <input
                  type="password"
                  value={values.confirm}
                  name="confirm"
                  placeholder="********"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.password && errors.password}</span>
              </div>
              <button className="btnDetails" type="submit">
                Create Account
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
