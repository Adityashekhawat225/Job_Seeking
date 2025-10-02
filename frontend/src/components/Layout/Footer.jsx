import { useContext } from "react";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Context } from "../../main";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Team Aditya</div>
      <div>
        <Link to={""} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={""} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"www.linkedin.com/in/aditya-shekhawat-b1249728b"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/_aditya_pratap_singhh?igsh=dTV3ZzZma3I0NWIx"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;