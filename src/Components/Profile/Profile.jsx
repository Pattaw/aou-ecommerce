import jwtDecode from "jwt-decode";
import style from "./Profile.module.css";
import { Helmet } from "react-helmet";

function Profile() {
  let decode = jwtDecode(localStorage.getItem("token"));

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Component" />
      </Helmet>
      <div className="row">
        <div className="col-md-6 m-auto d-flex  p-5 justify-content-between align-items-center border border-1">
          <div>
            {decode.role === "user" ? (
              <i
                style={{ fontSize: "8rem" }}
                className="text-main fa-solid fa-user"
              ></i>
            ) : (
              <i
                style={{ fontSize: "8rem" }}
                className="text-main fa-solid fa-landmark"
              ></i>
            )}
          </div>
          <div>
            <h2 className="profile-details text-capitalize fw-bold">
              <span className="text-main">name:</span> {decode.name}
            </h2>

            <h2 className="profile-details text-capitalize fw-bold">
              <span className="text-main">role:</span> {decode.role}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
