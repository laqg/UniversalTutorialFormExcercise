import "./styles.css";

import { Context } from "./state/context";

import useGetToken from "./hooks/useGetToken";

import Form from "./components/Form";

export default function App() {
  const {
    data: token,
    loading: tokenLoading,
    error: tokenError
  } = useGetToken();

  if (tokenLoading) {
    return (
      <div className="App">
        <h4>
          <span className="status-icon" role="img" aria-label="loading">
            💭
          </span>
          {"Loading token..."}
        </h4>
      </div>
    );
  }

  if (tokenError) {
    return (
      <div className="App">
        <h4>
          <span className="status-icon" role="img" aria-label="error">
            🛑
          </span>
          {"Error fetching token"}
        </h4>
      </div>
    );
  }

  return (
    <>
      {token && (
        <Context.Provider value={token}>
          <div className="App">
            <h2>
              <span role="img" aria-label="form">
                📝
              </span>{" "}
              Universal Tutorial Form Exercise
            </h2>
            <Form token={token} />
          </div>
        </Context.Provider>
      )}
    </>
  );
}
