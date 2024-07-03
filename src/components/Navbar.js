import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOutUserThunk } from "../store/auth";

export default function Navbar({ userExist }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth);

  const signOutUser = () => {
    dispatch(signOutUserThunk());
  };

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => history.goBack()}
            className="btn btn-outline-primary"
          >
            Back
          </button>
          <Link to="/settings" className="btn btn-outline-success ml-2">
            Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          {userExist ? (
            <>
              <span className="logged-in-user">Hi {user.username}!</span>
              <button
                className="btn btn-outline-danger ml-2"
                onClick={() => signOutUser()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/" className="btn btn-outline-success ml-2">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
