import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signInUserThunk } from "../store/auth";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    dispatch(signInUserThunk(data));
  };

  const handleLoginAsTestUser = () => {
    setValue("email", "user@test.com");
    setValue("password", "password");

    handleSubmit(onSubmit)();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
      <div className="header">Welcome here!</div>
      <div className="subheader">Login and chat with other people!</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        {false && <div className="alert alert-danger small">Some error</div>}
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" className="btn btn-outline-primary">
            Login
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleLoginAsTestUser}
          >
            Login as testUser
          </button>
        </div>
      </div>
    </form>
  );
}
