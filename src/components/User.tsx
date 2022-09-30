import { useEffect, useState } from "react";
import { Follow } from "../Icons";
import "../styles/user.css";

export function User({ user, userOn, follow }: any) {
  const [following, setFollowing] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/checkfollowing/${userOn.id}/${follow.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFollowing(data.follows);
      });
  }, []);
  return (
    <div className="user-wrapper">
      <section>
        <img
          src={
            follow.profilePic
              ? follow.profilePic
              : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAYHBQECA//EADUQAAICAQIDBAcHBQEAAAAAAAABAgMEBREGIUESMVFxFCIyYZGh0RNCUnKBscEVI1Ph8DT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6oAAAAAAScDByNQyFRiw7Un3vpFeLYEYLm9lu34IvmmcLYWMozyl6Tb17S2gvJfU7tVVdMFCquMIrpFbIDJ5eq/W5eZ4a1OEZxcZxUovvTW6OPqPDOn5kW66/R7ek6lsv1XcBnoJ2q6Xk6Xf9nkR3i/Ysj7Mv+8CCAAAAAAAAAAAAAAfdNU77oU1R7Vk5KMV4tmlaNplWl4kaa+c3zsn+JlW4IxFdqFuRNbqiG0fzS/1v8S8AAAAAAEfPwqc/Fnj5Ee1CXxT6NGaahh2YGZbjXe1W+/o10fwNTKlx3iLs42ZFetv9lJ+7vX7P4gVAAAAAAAAAAAAABdOA0vQ8p9ftUvkWgpvAmSo5GVjSa9eKnFeXJ/ui5AAAAAAA4XGaT0Oe/SyG3xO6VjjrJUcKjGTXass7TXuS+rQFKAAAAAAAAAAAAASdPy54OZVk1e1XLfbxXVfA03EyasvHrvokpVzW6ZlJ1dC1q/SbWknZjzfr1fyveBo4IWn6piajBSxboyfWD5SXmiaAAfIi5efi4VTtyroVx6dp835LqBIsshVXKdklGEVu23ySM11zUXqeoTvXKterWn+FfUmcQcQWanvRQpVYqfc++fn9DhgAAAAAAAAAAAAAHqB29L4Yzs1Kdy9GqfWa9Z+S+pZsLhnTcXZyqd8/wAVr3+XcBQaVN2J0Kbmu7sb7/I7WNlcSQilSs1rp2qe185IvddVdUezVXGEfCK2PsCh35fE0ovtrMS2+5Rt+y3OLkq77TtZUbe2+92p7/M1Y+ZwjNbTipJ9GtwMm5bcjw0bN4d0zL3bx1VJ/eqfZ+Xd8it6nwnl4yc8SXpMF91Laa+oFdB7KLhJxmnGSezTWzR4AAAAAAAD9sTGuzMmGPjw7Vk3yX8v3Ae4eJfm5EaMatzsl08F4sveicPY2nKNlqV2V/ka5R/Kv57yTo2lU6XjKuvaVj52Wbc5P6e46IDYAAAAAAAAAAcvWNExdThvOP2d69m6K5/r4ooepadk6bkOnJj74TXszXijUCJqOBRqONKjIjvF8013xfigMuBL1TT7tNy5Y967ucZ9Jx8SIAAAAv3Cek+g4npF0dsi9Jvf7kei+v8Aoq3DWn/1DVK4zW9VX9yfv27l8TRkB6AAAAAAAAAAAAAAADl8QaVHVMGUIpK+HrVS9/h5MziScZOMltJPZp9Ga2UTjLT1i58cquO1eRzlt0mu/wCP1ArwPdgBeOCMRVabZkyXr3z5flXJfPcsZC0an0fSsSrbZxpjv57bsmgAAAAAAAAAAAAAAAADj8VYiytGu2W86f7sf07/AJbnYPi2CsrlXJbxkmmvMDJtmCZ/R8jxAGl43/nq/Iv2P1AAAAAAAAAAAAAAAAAAAACugAD/2Q=="
          }
          alt=""
        />
        <p>{follow.fullName}</p>
      </section>
      {follow.id !== userOn.id && (
        <>
          <button
            className="follow-button"
            onClick={(e) => {
              fetch(`http://localhost:5000/follow/${userOn.id}/${follow.id}`, {
                method: "POST",
              });
              setFollowing(true);
            }}
          >
            <Follow />
            {following ? "Following" : "Follow"}
          </button>
        </>
      )}
    </div>
  );
}
