import React, { useState } from "react";

const CredentialsBox = ({ onSetCredentials }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const handleSetCredentials = () => {
    onSetCredentials(user, token);
    setUser('');
    setToken('');
  }

  return (
    <div>
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Credentials
      </h1>
      <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
        <div className="d-flex align-items-center flex-grow-1">
          <label htmlFor="userInput" className="me-2 fw-bold text-secondary">
            Username
          </label>
          <input
            id="userInput"
            className="form-control form-control-sm me-2"
            type="text"
            value={user}
            placeholder="Type your GitHub username"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>
        <div className="d-flex align-items-center flex-grow-1">
          <label htmlFor="tokenInput" className="me-2 fw-bold text-secondary">
            Token
          </label>
          <input
            id="tokenInput"
            className="form-control form-control form-control-sm me-2"
            type="text"
            min="1"
            max="100"
            placeholder="Type your GitHub token"
            value={token}
            onChange={(event) => {
              setToken(event.target.value);
            }}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!user || !token}
            onClick={handleSetCredentials}
          >
            Set Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default CredentialsBox;
