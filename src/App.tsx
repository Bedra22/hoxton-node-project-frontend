import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./global.css";
import { Homepage } from "./pages/Homepage";
import { NotSignedInPage } from "./pages/NotSignedInPage";
import { SignedInPage } from "./pages/SignedInPage";
import { SingleTweet } from "./pages/SingleTweet";

function App() {
  const [userOn, setUserOn] = useState(null);
  const [token, setToken] = useState(localStorage.tweeterToken);
  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/validation", {
        method: "GET",
        headers: {
          Authorization: localStorage.tweeterToken,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUserOn(data.user);
          setToken(data.token);
          localStorage.tweeterToken = data.token;
        });
    }
  }, []);
  return (
    <div className="App">
      {userOn ? (
        <SignedInPage
          userOn={userOn}
          setUserOn={setUserOn}
          setToken={setToken}
        />
      ) : (
        <NotSignedInPage setUserOn={setUserOn} />
      )}
    </div>
  );
}

export default App;
