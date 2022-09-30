import { useNavigate } from "react-router-dom";
import { Logo } from "../Icons";

export function PersonalInfo({ userInfo, setUserOn }: any) {
  const navigate = useNavigate();
  return (
    <div className="personal-info">
      <header>
        <div className="account-form-logo">
          <Logo />
          Tweeter
        </div>
      </header>
      <h2>Personal Info</h2>
      <p>Basic info, like your name and photo</p>
      <main>
        <div className="info">
          <h3>Profile</h3>
          <p>Some info may be visible to other people</p>
        </div>
        <form
          className="user-info"
          onSubmit={(e) => {
            e.preventDefault();
            let user = structuredClone(userInfo);
            // @ts-ignore
            if (e.target.userFullName.value) {
              // @ts-ignore
              user.fullName = e.target.userFullName.value;
            }
            // @ts-ignore
            if (e.target.userPhotoUrl.value) {
              // @ts-ignore
              user.profilePic = e.target.userPhotoUrl.value;
            }
            // @ts-ignore
            if (e.target.userPhoneNumber.value) {
              // @ts-ignore
              user.phoneNr = e.target.userPhoneNumber.value;
            }
            // @ts-ignore
            if (e.target.userBio.value) {
              // @ts-ignore
              user.Bio = e.target.userBio.value;
            }

            console.log(user);
            fetch("http://localhost:5000/sign-up", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((resp) => resp.json())
              .then((data) => {
                console.log(data);
                localStorage.tweeterToken = data.token;
                setUserOn(data.newUser);
                navigate("/");
              });
          }}
        >
          <div>
            <label>NAME</label>
            <span>
              <input
                type="text"
                placeholder="Enter your full name here"
                name="userFullName"
              />
            </span>
          </div>
          <div>
            <label>PHOTO (optional)</label>
            <span>
              <input
                type="text"
                placeholder="Enter photo URL here"
                name="userPhotoUrl"
              />
            </span>
          </div>
          <div>
            <label>BIO (optional)</label>
            <span>
              <input
                type="text"
                placeholder="Tell us about yourself"
                name="userBio"
              />
            </span>
          </div>
          <div className="last-child">
            <label>PHONE (optional)</label>
            <span>
              <input
                type="text"
                placeholder="Enter your phone number"
                name="userPhoneNumber"
              />
            </span>
          </div>
          <input
            type="submit"
            value="Finish registration"
            className="finish-registration-button"
          />
        </form>
      </main>
    </div>
  );
}
