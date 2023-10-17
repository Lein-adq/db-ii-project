"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const LogIn = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!usernameOrEmail || !password) {
      alert("Please enter your username/email and password.");
      return;
    }
  };

  return (
    <div>
      <Card>
        <CardHeader className="flex justify-center text-xl font-semibold">
          <h2>Welcome back</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Username or Email"
            autoComplete="off"
            placeholder="Enter your username or email"
            onValueChange={setUsernameOrEmail}
            value={usernameOrEmail}
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter your Password"
            onValueChange={setPassword}
            value={password}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-4 justify-center">
          <Button radius="small" className="font-medium" onClick={handleLogin}>
            Log In
          </Button>
          <div className="flex justify-center">
            <Button color="success" onClick={handleLogin}>
              Log In with Username
            </Button>
            <Button color="success" onClick={handleLogin}>
              Log In with Email
            </Button>
          </div>
          <span>
            Don&apos;t have an account?{" "}
            <Link as={NextLink} href="/signup">
              Sign Up here
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogIn;
