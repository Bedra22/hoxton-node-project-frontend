import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SoloTweet } from "../components/SoloTweet";
import { Tweet } from "../components/Tweet";
import "../styles/tweetpage.css";

export function SingleTweet({ userOn }: any) {
  const [tweet, setTweet] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/tweets/${params.tweetId}`)
      .then((resp) => resp.json())
      .then((tweet) => {
        setTweet(tweet);
      });
  }, []);
  return (
    <>
      {tweet && (
        <>
          <Header user={userOn} />
          <div className="tweet-page">
            <SoloTweet tweet={tweet} userOn={userOn} />
          </div>
        </>
      )}
    </>
  );
}
