import { IoLogoLinkedin } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { SiSlack } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const SocialMediaPanel = () => {
  return (
    <div>
      <GrAddCircle />

      <IoLogoLinkedin />
      <SiSlack />
      <FaFacebook />
      <IoLogoLinkedin />
      <FaYoutube />
      <FaInstagram />
    </div>
  );
};

export default SocialMediaPanel;
