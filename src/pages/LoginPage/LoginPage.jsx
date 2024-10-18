import React from "react";
import "./LoginPage.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <main className="main bg-dark">
      <LoginForm />
    </main>
  );
};
