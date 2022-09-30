import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommentIcon, LikeIcon, RetweetIcon, SaveIcon } from "../Icons";
import "../styles/tweet.css";
import { Comment } from "./Comment";

export function PersonalTweet({ tweet, userOn }: any) {
  const [tweetAuthor, setTweetAuthor] = useState(tweet.User);
  const [stats, setStats] = useState({
    likes: 0,
    saves: 0,
    retweets: 0,
    comments: 0,
  });
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch(`http://localhost:5000/singleUser/${tweet.userId}`)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setTweetAuthor(data);
    //     console.log(data);
    //   });
    fetch(`http://localhost:5000/tweetStats/${tweet.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setStats(data.stats);
      });
    fetch(`http://localhost:5000/liked/${userOn.id}/${tweet.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        for (let like of data.likes) {
          if (like.userId === userOn.id) {
            setLiked(true);
          }
        }
      });
    fetch(`http://localhost:5000/retweeted/${userOn.id}/${tweet.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        for (let retweet of data.retweets) {
          if (retweet.userId === userOn.id) {
            setRetweeted(true);
          }
        }
      });
    fetch(`http://localhost:5000/saved/${userOn.id}/${tweet.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        for (let save of data.saves) {
          if (save.userId === userOn.id) {
            setSaved(true);
          }
        }
      });
  }, []);
  return (
    <>
      {tweetAuthor && (
        <div className="tweet">
          <div
            className="tweet-info"
            onClick={(e) => {
              // @ts-ignore
              navigate(`/profile/${tweetAuthor.id}`);
            }}
          >
            <img
              src={
                // @ts-ignore
                tweetAuthor.profilePic
                  ? // @ts-ignore
                    tweetAuthor.profilePic
                  : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EADgQAAICAQIBBwgJBQAAAAAAAAABAgMEBRFREiEiMUFh0QYTUnGRocHhFTJCQ2KBkqKxFCMkM/D/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3AAAAAAAAAEDP1WjEbhz2Wr7Mez1sqpa/lN9GulLvTfxA0gM/T5QWKW19EWuMHs/eXWLk1ZVXnKZqS7eKA9gAAAAAAAAAAAAAhavmf0eI5Q/2TfJh3d5NM75ST3yqq+yMN/a/kBUN7ttvdvrb7T4AVAk6flyw8lWJvkvmmuKIwA3Kakk090+dM+kLR5uzTaG+tLk+x7E0igAAAAAAAAAAGc8pINZlc+yVey/JvxNGVuuYjycTlQW9lb5SXFdqAy4AKgAe2Ljzyr4VV9cnzvgu1gabRYuGmUp9u8va2TjmuCrhGEVtGKSS7joigAAAAAAAAAAA8MnKoxY8q+yMeC7WVV3lDBPaihy/FOW3uQHrqGixum7cVqub53F/VfgVU9JzovbzG/fGSZIev5W/NXTt6n4nz6fy/Qo/S/EDinRMyx9NRqXGT3/gvsDAqwq+TBcqb+tN9bKT6fy/Qp/S/E6h5QZCfTqqku7dAaMFTja7jWNRujKpvtfOvaWkJxnFShJSi+pp77gdAAAAAAAAFXq+qLE/s0bSua532Q+ZYZNqox7LX9iLZi7JysnKc3vKT3b4gLLJ2zc7JOUn1ts5AKgAAA2AAbEnCzbsOe9UujvzwfUyMANlhZdeZQrKn3Si+tMkGW0LIdOfGG/QtXJfw/wC7zUkUAAAAAV+vT5Gm2L0mo+8ypo/KV/4Va42L+GZwAACoAAAAAAAA9cafm8mqfozT95tTCm5i90nxRFfQAAAAFb5QUytwOVFNuuSk/V1fEy5uipztEpubnjvzU32bdF+AGbBMv0vNo33pc16VfS+ZEacXs1s+DKj4AAAAAA+xTk9opt8ETsbSMu9puvzcfSnze7rAh01yuuhVBbym9kbdcy2RC0/TacJbx3nY+ub+HAmkUAAAAAAAAOZ1wsW1kIy9a3OgBEnpuFP62NX+S2/g83o+A/uP3y8SeAIC0fAX3H75eJ6Q03Ch1Y0PzW5LAHEK4VrauEYr8K2OwAAAAAAD/9k="
              }
              alt=""
              className="tweet-author-profile"
            />
            <div>
              {/* @ts-ignore  */}
              <h3>{tweetAuthor.fullName}</h3>
              <span>{tweet.publishTime} </span>
            </div>
          </div>
          <Link to={`/tweet/${tweet.id}`}>
            <p>{tweet.content}</p>
            {tweet.image ? (
              <img src={tweet.image} alt="" className="tweet-image" />
            ) : null}
          </Link>
          <div className="tweet-stats">
            <span>{stats.comments} Comments</span>
            <span>{stats.retweets} Retweets</span>
            <span>{stats.saves} Saved</span>
            <span>{stats.likes} Likes</span>
          </div>
          <div className="tweet-actions">
            <div className="tweet-action">
              <CommentIcon />
              Comment
            </div>
            {retweeted ? (
              <div className="tweet-action retweeted">
                <RetweetIcon color={"#27ae60"} />
                Retweeted
              </div>
            ) : (
              <div
                className="tweet-action"
                onClick={(e) => {
                  fetch(
                    `http://localhost:5000/retweet/${userOn.id}/${tweet.id}`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                    }
                  );
                  setRetweeted(true);
                  let statsClone = structuredClone(stats);
                  statsClone.retweets++;
                  setStats(statsClone);
                }}
              >
                <RetweetIcon color={"#4F4F4F"} />
                Retweet
              </div>
            )}
            {liked ? (
              <div className="tweet-action liked">
                <LikeIcon color={"#eb5757"} />
                Liked
              </div>
            ) : (
              <div
                className="tweet-action"
                onClick={(e) => {
                  fetch(`http://localhost:5000/like/${userOn.id}/${tweet.id}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  });

                  setLiked(true);
                  let statsClone = structuredClone(stats);
                  statsClone.likes++;
                  setStats(statsClone);
                }}
              >
                <LikeIcon color={"#4F4F4F"} />
                Like
              </div>
            )}
            {saved ? (
              <div className="tweet-action saved">
                <SaveIcon color={"#2d9cdb"} />
                Saved
              </div>
            ) : (
              <div
                className="tweet-action"
                onClick={(e) => {
                  fetch(`http://localhost:5000/save/${userOn.id}/${tweet.id}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  });
                  setSaved(true);
                  let statsClone = structuredClone(stats);
                  statsClone.saves++;
                  setStats(statsClone);
                }}
              >
                <SaveIcon color={"#4F4F4F"} />
                Save
              </div>
            )}
          </div>
          <div className="tweet-your-reply">
            <img
              src={
                userOn.profilePic
                  ? userOn.profilePic
                  : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EADgQAAICAQIBBwgJBQAAAAAAAAABAgMEBRFREiEiMUFh0QYTUnGRocHhFTJCQ2KBkqKxFCMkM/D/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3AAAAAAAAAEDP1WjEbhz2Wr7Mez1sqpa/lN9GulLvTfxA0gM/T5QWKW19EWuMHs/eXWLk1ZVXnKZqS7eKA9gAAAAAAAAAAAAAhavmf0eI5Q/2TfJh3d5NM75ST3yqq+yMN/a/kBUN7ttvdvrb7T4AVAk6flyw8lWJvkvmmuKIwA3Kakk090+dM+kLR5uzTaG+tLk+x7E0igAAAAAAAAAAGc8pINZlc+yVey/JvxNGVuuYjycTlQW9lb5SXFdqAy4AKgAe2Ljzyr4VV9cnzvgu1gabRYuGmUp9u8va2TjmuCrhGEVtGKSS7joigAAAAAAAAAAA8MnKoxY8q+yMeC7WVV3lDBPaihy/FOW3uQHrqGixum7cVqub53F/VfgVU9JzovbzG/fGSZIev5W/NXTt6n4nz6fy/Qo/S/EDinRMyx9NRqXGT3/gvsDAqwq+TBcqb+tN9bKT6fy/Qp/S/E6h5QZCfTqqku7dAaMFTja7jWNRujKpvtfOvaWkJxnFShJSi+pp77gdAAAAAAAAFXq+qLE/s0bSua532Q+ZYZNqox7LX9iLZi7JysnKc3vKT3b4gLLJ2zc7JOUn1ts5AKgAAA2AAbEnCzbsOe9UujvzwfUyMANlhZdeZQrKn3Si+tMkGW0LIdOfGG/QtXJfw/wC7zUkUAAAAAV+vT5Gm2L0mo+8ypo/KV/4Va42L+GZwAACoAAAAAAAA9cafm8mqfozT95tTCm5i90nxRFfQAAAAFb5QUytwOVFNuuSk/V1fEy5uipztEpubnjvzU32bdF+AGbBMv0vNo33pc16VfS+ZEacXs1s+DKj4AAAAAA+xTk9opt8ETsbSMu9puvzcfSnze7rAh01yuuhVBbym9kbdcy2RC0/TacJbx3nY+ub+HAmkUAAAAAAAAOZ1wsW1kIy9a3OgBEnpuFP62NX+S2/g83o+A/uP3y8SeAIC0fAX3H75eJ6Q03Ch1Y0PzW5LAHEK4VrauEYr8K2OwAAAAAAD/9k="
              }
              alt=""
              className="tweet-reply-profile"
            />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // @ts-ignore
                if (e.target.comment.value.length >= 5) {
                  fetch(
                    `http://localhost:5000/comment/${userOn.id}/${tweet.id}`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      // @ts-ignore
                      body: JSON.stringify({ comment: e.target.comment.value }),
                    }
                  )
                    .then((resp) => resp.json())
                    .then((data) => {
                      console.log(data);
                    });
                }
              }}
            >
              <input
                type="text"
                placeholder="Tweet your reply"
                name="comment"
              />
            </form>
          </div>
          <div className="comments-section"></div>
        </div>
      )}
    </>
  );
}
