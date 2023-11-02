import React from "react";
import { useState } from "react";
import icon from "../../assets/stack-overflow-logo.svg";
import "./Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const color = { color: "#007ac6" };

  const handleswitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        {!isSignup ? (
          <img src={icon} alt="stack overflow" className="login-logo" />
        ) : (
          <p>
            Create your Stack Overflow account. It’s free and only takes a
            minute.
          </p>
        )}
        <form>
          {isSignup && (
            <label
              htmlFor="Display name
            "
            >
              <h4>Display name</h4>
              <input
                type="text"
                name="Display name
"
                id="Display name
"
              />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot password?
                </p>
              )}
            </div>
            <input type="password" name="password" id="password" />

            {isSignup && (
              <p>
                Passwords must contain at least eight characters,
                <br /> including at least 1 letter and 1 number.
              </p>
            )}
          </label>

          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional product <br /> updates, user
                research invitations, company <br /> announcements, and digests.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {!isSignup ? "Log In" : "Sign up"}
          </button>

          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our{" "}
              <span style={color}>
                terms of <br /> service
              </span>{" "}
              and acknowledge that you have read and <br /> understand our{" "}
              <span style={color}>privacy policy</span> and
              <span style={color}>
                code of <br /> conduct
              </span>
              .
            </p>
          )}
        </form>
        <p>
          {!isSignup ? "Don’t have an account?" : "Already have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleswitch}
          >
            {!isSignup ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
