import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

export function Header({ user }: any) {
  const navigate = useNavigate();
  return (
    <>
      {user && (
        <>
          {" "}
          <header>
            <div className="header">
              <div
                className="header_logo-container"
                onClick={() => {
                  navigate("/");
                }}
              >
                <svg
                  width="41"
                  height="30"
                  viewBox="0 0 41 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.1752 23.5172L31.1324 14.7828C30.7713 14.1574 29.8686 14.1574 29.5075 14.7828L24.4647 23.5172C24.1036 24.1426 24.555 24.9244 25.2771 24.9244H35.3628C36.0849 24.9244 36.5363 24.1427 36.1752 23.5172ZM35.1947 12.4375C33.0281 8.6849 27.6118 8.68491 25.4452 12.4375L20.4024 21.1719C18.2359 24.9244 20.9441 29.6151 25.2771 29.6151H35.3628C39.6958 29.6151 42.404 24.9244 40.2375 21.1719L35.1947 12.4375Z"
                    fill="#2F80ED"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.6734 23.3664L16.5616 5.85216C16.2005 5.22674 15.2978 5.22673 14.9367 5.85217L4.82479 23.3664C4.46371 23.9918 4.91507 24.7736 5.63725 24.7736H25.861C26.5832 24.7736 27.0345 23.9919 26.6734 23.3664ZM20.6238 3.50681C18.4573 -0.245762 13.0409 -0.245757 10.8744 3.50681L0.76252 21.0211C-1.40403 24.7736 1.30416 29.4644 5.63725 29.4644H25.861C30.1941 29.4644 32.9023 24.7736 30.7357 21.0211L20.6238 3.50681Z"
                    fill="#2F80ED"
                  />
                </svg>

                <h1>Tweeter</h1>
              </div>
              <div className="header_pages-container">
                <p className="selected">Home</p>
                <p>Explore</p>
                <p>Bookmarks</p>
              </div>
              <Link
                className="header_profile-container"
                to={`/profile/${user.id}`}
              >
                <img
                  src={
                    user.profilePic
                      ? user.profilePic
                      : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EADgQAAICAQIBBwgJBQAAAAAAAAABAgMEBRFREiEiMUFh0QYTUnGRocHhFTJCQ2KBkqKxFCMkM/D/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3AAAAAAAAAEDP1WjEbhz2Wr7Mez1sqpa/lN9GulLvTfxA0gM/T5QWKW19EWuMHs/eXWLk1ZVXnKZqS7eKA9gAAAAAAAAAAAAAhavmf0eI5Q/2TfJh3d5NM75ST3yqq+yMN/a/kBUN7ttvdvrb7T4AVAk6flyw8lWJvkvmmuKIwA3Kakk090+dM+kLR5uzTaG+tLk+x7E0igAAAAAAAAAAGc8pINZlc+yVey/JvxNGVuuYjycTlQW9lb5SXFdqAy4AKgAe2Ljzyr4VV9cnzvgu1gabRYuGmUp9u8va2TjmuCrhGEVtGKSS7joigAAAAAAAAAAA8MnKoxY8q+yMeC7WVV3lDBPaihy/FOW3uQHrqGixum7cVqub53F/VfgVU9JzovbzG/fGSZIev5W/NXTt6n4nz6fy/Qo/S/EDinRMyx9NRqXGT3/gvsDAqwq+TBcqb+tN9bKT6fy/Qp/S/E6h5QZCfTqqku7dAaMFTja7jWNRujKpvtfOvaWkJxnFShJSi+pp77gdAAAAAAAAFXq+qLE/s0bSua532Q+ZYZNqox7LX9iLZi7JysnKc3vKT3b4gLLJ2zc7JOUn1ts5AKgAAA2AAbEnCzbsOe9UujvzwfUyMANlhZdeZQrKn3Si+tMkGW0LIdOfGG/QtXJfw/wC7zUkUAAAAAV+vT5Gm2L0mo+8ypo/KV/4Va42L+GZwAACoAAAAAAAA9cafm8mqfozT95tTCm5i90nxRFfQAAAAFb5QUytwOVFNuuSk/V1fEy5uipztEpubnjvzU32bdF+AGbBMv0vNo33pc16VfS+ZEacXs1s+DKj4AAAAAA+xTk9opt8ETsbSMu9puvzcfSnze7rAh01yuuhVBbym9kbdcy2RC0/TacJbx3nY+ub+HAmkUAAAAAAAAOZ1wsW1kIy9a3OgBEnpuFP62NX+S2/g83o+A/uP3y8SeAIC0fAX3H75eJ6Q03Ch1Y0PzW5LAHEK4VrauEYr8K2OwAAAAAAD/9k="
                  }
                  alt=""
                  className="header_profile-image"
                />
                <p className="header_profile-name">{user.fullName}</p>
              </Link>
            </div>
          </header>
        </>
      )}
    </>
  );
}
