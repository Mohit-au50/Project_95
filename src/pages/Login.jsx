import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full h-screen">
      <div className="container mx-auto h-full grid place-items-center">
        <Link to="/dashboard" className="bg-rose-500 p-4 px-7 rounded">
          <h1 className="font-medium tracking-wide">Login Page</h1>
        </Link>
      </div>
    </section>
  );
};

export default Login;
