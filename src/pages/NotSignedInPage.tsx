import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "../components/LogIn";
import { Signup } from "../components/Signup";
import { Logo } from "../Icons";
import "../styles/notSignedInPage.css";

export function NotSignedInPage({ setUserOn }: any) {
  // const [current, setCurrent] = useState("Login");
  return (
    <>
      <Routes>
        <Route index element={<LogIn setUserOn={setUserOn} />} />
        <Route path="/sign-up" element={<Signup setUserOn={setUserOn} />} />
      </Routes>
      {/* {current === "Login" ? (
        <LogIn
          setCurrent={setCurrent}
          setTrigger={setTrigger}
          trigger={trigger}
        />
      ) : (
        <Signup
          setCurrent={setCurrent}
          setTrigger={setTrigger}
          trigger={trigger}
        />
      )} */}
    </>
  );
}
