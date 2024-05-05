import { Link } from "react-router-dom";
import style from "./NotAuthorised.module.css";
import { Helmet } from "react-helmet";

function NotAuthorised() {
  return (
    <>
      <Helmet>
        <title>Not Authroised</title>
        <meta name="description" content="Component" />
      </Helmet>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="warning">
            <i className="text-main fa-solid fa-hand AuthIcon"></i>

           
            <h3>  if you have an account please login first...</h3>
           
            <Link to={"/Login"} className="my-4 text-white btn bg-main">
              Login now
            </Link>
            <h3>  if you don't have an account please register ...</h3>
            
            <Link to={"/Register"} className="my-4 text-white btn bg-main">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotAuthorised;
