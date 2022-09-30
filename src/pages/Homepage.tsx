import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import { PictureIcon, WorldIcon } from "../Icons";
import "../styles/homepage.css";
import { User } from "./SignedInPage";

type Props = {
  userOn: User | null;
};

export function Homepage({ userOn }: Props) {
  const [tweets, setTweets] = useState([]);
  const [showImageLink, setShowImageLink] = useState(false);
  const [image, setImage] = useState(null);
  const [rows, setRows] = useState(1);
  useEffect(() => {
    fetch("http://localhost:5000/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => {
        const reversed: any = Array.from(tweetsFromServer);
        setTweets(reversed);
        console.log(tweets);
      });
  }, []);

  return (
    <>
      {userOn && (
        <>
          {" "}
          <Header user={userOn} />
          <main className="main-section">
            <div className="tweets-section">
              <div className="tweet-smthing">
                <h4>Tweet something</h4>
                <form
                  className="tweet-smthing-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // @ts-ignore
                    let body = {
                      userId: userOn.id,
                    };
                    // @ts-ignore
                    if (e.target.text.value || image) {
                      // @ts-ignore
                      if (e.target.text.value) {
                        // @ts-ignore
                        body.content = e.target.text.value;
                      }
                      if (image) {
                        // @ts-ignore
                        body.image = image;
                      }
                      fetch(`http://localhost:5000/tweet`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                      })
                        .then((resp) => resp.json())
                        .then((data) => {
                          setTweets(data.reverse());
                        });
                    }
                  }}
                >
                  {/* @ts-ignore  */}
                  <img
                    // @ts-ignore

                    src={
                      userOn.profilePic
                        ? userOn.profilePic
                        : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EADgQAAICAQIBBwgJBQAAAAAAAAABAgMEBRFREiEiMUFh0QYTUnGRocHhFTJCQ2KBkqKxFCMkM/D/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3AAAAAAAAAEDP1WjEbhz2Wr7Mez1sqpa/lN9GulLvTfxA0gM/T5QWKW19EWuMHs/eXWLk1ZVXnKZqS7eKA9gAAAAAAAAAAAAAhavmf0eI5Q/2TfJh3d5NM75ST3yqq+yMN/a/kBUN7ttvdvrb7T4AVAk6flyw8lWJvkvmmuKIwA3Kakk090+dM+kLR5uzTaG+tLk+x7E0igAAAAAAAAAAGc8pINZlc+yVey/JvxNGVuuYjycTlQW9lb5SXFdqAy4AKgAe2Ljzyr4VV9cnzvgu1gabRYuGmUp9u8va2TjmuCrhGEVtGKSS7joigAAAAAAAAAAA8MnKoxY8q+yMeC7WVV3lDBPaihy/FOW3uQHrqGixum7cVqub53F/VfgVU9JzovbzG/fGSZIev5W/NXTt6n4nz6fy/Qo/S/EDinRMyx9NRqXGT3/gvsDAqwq+TBcqb+tN9bKT6fy/Qp/S/E6h5QZCfTqqku7dAaMFTja7jWNRujKpvtfOvaWkJxnFShJSi+pp77gdAAAAAAAAFXq+qLE/s0bSua532Q+ZYZNqox7LX9iLZi7JysnKc3vKT3b4gLLJ2zc7JOUn1ts5AKgAAA2AAbEnCzbsOe9UujvzwfUyMANlhZdeZQrKn3Si+tMkGW0LIdOfGG/QtXJfw/wC7zUkUAAAAAV+vT5Gm2L0mo+8ypo/KV/4Va42L+GZwAACoAAAAAAAA9cafm8mqfozT95tTCm5i90nxRFfQAAAAFb5QUytwOVFNuuSk/V1fEy5uipztEpubnjvzU32bdF+AGbBMv0vNo33pc16VfS+ZEacXs1s+DKj4AAAAAA+xTk9opt8ETsbSMu9puvzcfSnze7rAh01yuuhVBbym9kbdcy2RC0/TacJbx3nY+ub+HAmkUAAAAAAAAOZ1wsW1kIy9a3OgBEnpuFP62NX+S2/g83o+A/uP3y8SeAIC0fAX3H75eJ6Q03Ch1Y0PzW5LAHEK4VrauEYr8K2OwAAAAAAD/9k="
                    }
                    className="tweet-smthing-profile"
                  />
                  <div className="inputs">
                    <textarea
                      name="text"
                      placeholder="What’s happening?"
                      className="tweet-smthing-text"
                      maxLength={400}
                      cols={76}
                      rows={rows}
                      onChange={(e) => {
                        if (e.target.value.length === e.target.cols * rows) {
                          setRows(rows + 1);
                        }
                        // console.log(e.target.cols);
                      }}
                    />
                    {image && (
                      <div className="image-container">
                        <span
                          className="close-image"
                          onClick={() => {
                            setImage(null);
                          }}
                        >
                          X
                        </span>
                        <img src={image} alt="" />
                      </div>
                    )}

                    <div className="tweet-options">
                      <div>
                        <PictureIcon
                          setShowImageLink={setShowImageLink}
                          showImageLink={showImageLink}
                          setImage={setImage}
                        />
                        <WorldIcon />
                        <p>Everyone can reply</p>
                      </div>
                      <input type="submit" value="Tweet" />
                    </div>
                    {showImageLink && (
                      <input
                        type="text"
                        className="tweet-smthing-text"
                        placeholder="Enter image link"
                        onChange={(e) => {
                          // @ts-ignore
                          setImage(e.target.value);
                        }}
                      />
                    )}
                  </div>
                </form>
              </div>
              <>
                {tweets.map((tweet, index) => (
                  <Tweet tweet={tweet} key={index} userOn={userOn} />
                ))}
              </>
            </div>
            <aside className="trending">
              <h4>Trends for you</h4>
              <div className="trend">
                <h3>#programming</h3>
                <span>213k tweets</span>
              </div>
              <div className="trend">
                <h3>#devchallenges</h3>
                <span>123k Tweets</span>
              </div>
              <div className="trend">
                <h3>#frontend</h3>
                <span>34k Tweets</span>
              </div>
              <div className="trend">
                <h3>#helsinki</h3>
                <span>11k Tweets</span>
              </div>
              <div className="trend">
                <h3>#100DaysOfCode</h3>
                <span>5k Tweets</span>
              </div>
              <div className="trend">
                <h3>#learntocode</h3>
                <span>1k Tweets</span>
              </div>
            </aside>
          </main>
        </>
      )}
    </>
  );
}
