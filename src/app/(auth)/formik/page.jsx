"use client";

import React from "react";
import { Formik } from "formik";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

// Define the validate function
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else {
    // Password regex patterns and error messages
    const patterns = [
      {
        pattern: /^(?=.*[a-z])/,
        message: "Password must include a lowercase letter",
      },
      {
        pattern: /^(?=.*[A-Z])/,
        message: "Password must include an uppercase letter",
      },
      { pattern: /^(?=.*\d)/, message: "Password must include a number" },
      {
        pattern: /^(?=.*[@$!%*?&#-])/,
        message: "Password must include a special character",
      },
    ];

    patterns.forEach(({ pattern, message }) => {
      if (!pattern.test(values.password)) {
        errors.password = message;
        return;
      }
    });
  }
  return errors;
};

const FormComponent = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleChange(event);
    props.handleChange(name, value);
  };

  const handleInputBlur = (event) => {
    const { name } = event.target;
    handleBlur(event);
    props.handleBlur(name);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        className="pt-4"
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        value={values.email}
        color={errors.email ? "danger" : "default"}
        errorMessage={errors.email}
      />

      <Input
        className="pb-4"
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        value={values.password}
        color={errors.password ? "danger" : "default"}
        errorMessage={errors.password}
      />

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

const Basic = () => (
  <div className="flex flex-col gap-4 transition delay-150 duration-100">
    <h1 className="text-2xl font-bold">Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formikProps) => <FormComponent {...formikProps} />}
    </Formik>
  </div>
);

export default Basic;
