import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { ProfilePage } from "./ProfilePage";
import { SingleTweet } from "./SingleTweet";

export type User = {
  fullName: String;
  id: Number;
  email: String;
  profilePic: String | null;
  password: String;
  phoneNr: Number | null;
  bio: String | null;
};

export function SignedInPage({ userOn, setUserOn, setToken }: any) {
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   fetch("http://localhost:5000/validation", {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.tweeterToken,
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setUser(data.user);
  //     });
  // }, []);

  return (
    <>
      <Routes>
        <Route index element={<Homepage userOn={userOn} />} />
        <Route
          path="/profile/:userId"
          element={
            <ProfilePage
              userOn={userOn}
              setUserOn={setUserOn}
              setToken={setToken}
            />
          }
        />
        <Route
          path="/tweet/:tweetId"
          element={<SingleTweet userOn={userOn} />}
        />
      </Routes>
    </>
  );
}
