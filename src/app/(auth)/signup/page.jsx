"use client";
import { useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const RegisterCard = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Validation function
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 4) {
      errors.username = "Username must be at least 4 characters";
    }
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

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
    }
    return errors;
  };

  // Validation results
  const validationErrors = useMemo(
    () => validate({ username, email, password, confirmPassword }),
    [username, email, password, confirmPassword],
  );

  return (
    <div>
      <Card>
        <CardHeader className="flex justify-center text-xl font-semibold">
          <h2>Welcome to our To Do App</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Username"
            placeholder="Enter your username"
            autoComplete="off"
            onValueChange={setUsername}
            value={username}
            color={
              username === ""
                ? "default"
                : username.length >= 4
                ? "success"
                : "danger"
            }
            errorMessage={username === "" ? "" : validationErrors.username}
          />

          <Input
            type="email"
            label="Email"
            autoComplete="off"
            placeholder="Enter your Email"
            onValueChange={setEmail}
            value={email}
            color={
              email === ""
                ? "default"
                : validationErrors.email
                ? "danger"
                : "success"
            }
            errorMessage={email === "" ? "" : validationErrors.email}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your Password"
            onValueChange={setPassword}
            value={password}
            color={
              password === ""
                ? "default"
                : validationErrors.password
                ? "danger"
                : "success"
            }
            errorMessage={password === "" ? "" : validationErrors.password}
          />
          <Input
            type="password"
            label="Confirm Password"
            placeholder="Confirm your Password"
            onValueChange={setConfirmPassword}
            value={confirmPassword}
            color={
              confirmPassword === ""
                ? "default"
                : validationErrors.confirmPassword
                ? "danger"
                : "success"
            }
            errorMessage={
              confirmPassword === "" ? "" : validationErrors.confirmPassword
            }
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 justify-center">
          <Button radius="small" className="font-medium">
            Sign Up
          </Button>
          <span>
            Already have an account? Login{" "}
            <Link as={NextLink} href="/login">
              here
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterCard;
