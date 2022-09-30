import { LikeIcon } from "../Icons";
import "../styles/comments.css";

export function Comment({ comment }: any) {
  return (
    <div className="comment">
      <img
        src={
          comment.User.profilePic
            ? comment.User.profilePic
            : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EADgQAAICAQIBBwgJBQAAAAAAAAABAgMEBRFREiEiMUFh0QYTUnGRocHhFTJCQ2KBkqKxFCMkM/D/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3AAAAAAAAAEDP1WjEbhz2Wr7Mez1sqpa/lN9GulLvTfxA0gM/T5QWKW19EWuMHs/eXWLk1ZVXnKZqS7eKA9gAAAAAAAAAAAAAhavmf0eI5Q/2TfJh3d5NM75ST3yqq+yMN/a/kBUN7ttvdvrb7T4AVAk6flyw8lWJvkvmmuKIwA3Kakk090+dM+kLR5uzTaG+tLk+x7E0igAAAAAAAAAAGc8pINZlc+yVey/JvxNGVuuYjycTlQW9lb5SXFdqAy4AKgAe2Ljzyr4VV9cnzvgu1gabRYuGmUp9u8va2TjmuCrhGEVtGKSS7joigAAAAAAAAAAA8MnKoxY8q+yMeC7WVV3lDBPaihy/FOW3uQHrqGixum7cVqub53F/VfgVU9JzovbzG/fGSZIev5W/NXTt6n4nz6fy/Qo/S/EDinRMyx9NRqXGT3/gvsDAqwq+TBcqb+tN9bKT6fy/Qp/S/E6h5QZCfTqqku7dAaMFTja7jWNRujKpvtfOvaWkJxnFShJSi+pp77gdAAAAAAAAFXq+qLE/s0bSua532Q+ZYZNqox7LX9iLZi7JysnKc3vKT3b4gLLJ2zc7JOUn1ts5AKgAAA2AAbEnCzbsOe9UujvzwfUyMANlhZdeZQrKn3Si+tMkGW0LIdOfGG/QtXJfw/wC7zUkUAAAAAV+vT5Gm2L0mo+8ypo/KV/4Va42L+GZwAACoAAAAAAAA9cafm8mqfozT95tTCm5i90nxRFfQAAAAFb5QUytwOVFNuuSk/V1fEy5uipztEpubnjvzU32bdF+AGbBMv0vNo33pc16VfS+ZEacXs1s+DKj4AAAAAA+xTk9opt8ETsbSMu9puvzcfSnze7rAh01yuuhVBbym9kbdcy2RC0/TacJbx3nY+ub+HAmkUAAAAAAAAOZ1wsW1kIy9a3OgBEnpuFP62NX+S2/g83o+A/uP3y8SeAIC0fAX3H75eJ6Q03Ch1Y0PzW5LAHEK4VrauEYr8K2OwAAAAAAD/9k="
        }
        alt=""
      />
      <div>
        <div className="comment-wrapper">
          <div className="comment-info">
            <h3>{comment.User.fullName}</h3>
            <span>{comment.publishTime} </span>
          </div>
          <div className="comment-text">{comment.content}</div>
        </div>
        <div className="comment-stats">
          <div className="comment-like">
            <LikeIcon />
            Like
          </div>
          <div>12k Likes</div>
        </div>
      </div>
    </div>
  );
}
