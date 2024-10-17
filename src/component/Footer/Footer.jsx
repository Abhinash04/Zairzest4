import React from "react";
import "./Footer.scss";
import zairzaLogo from "../../assets/images/zairza-logo.webp";
import { LuGithub } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <h1 className="want-foot">Want to Know about us ?</h1>
      </div>
      <div className="middle-footer">
        <div className="middle-footer-text">
          <p>
            Come and know more about Zairza and join our community to experience
            such more amazing stuffs.
          </p>
        </div>
        <div className="middle-footer-icon">
          <div
            onClick={() => {
              window.open("https://www.facebook.com/zairza.cetb ", "_blank");
            }}
            className="middle-footer-icons"
          >
            <FaFacebookF className="ico" />
          </div>
          <div
            onClick={() => {
              window.open("https://x.com/zairza_cetb ", "_blank");
            }}
            className="middle-footer-icons"
          >
            <RiTwitterXFill className="ico" />
          </div>
          <div
            onClick={() => {
              window.open(
                "https://www.youtube.com/@zairzarobosofdescluboutrb1825",
                "_blank"
              );
            }}
            className="middle-footer-icons"
          >
            <IoLogoYoutube className="ico" />
          </div>
          <div
            onClick={() => {
              window.open("mailto:cet.sac.zairza@gmail.com", "_blank");
            }}
            className="middle-footer-icons"
          >
            <AiOutlineMail className="ico" />
          </div>
          <div
            onClick={() => {
              window.open("https://www.instagram.com/zairza.outr/ ", "_blank");
            }}
            className="middle-footer-icons"
          >
            <AiOutlineInstagram className="ico" />
          </div>
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/zairza/posts/?feedView=all ",
                "_blank"
              );
            }}
            className="middle-footer-icons"
          >
            <FaLinkedinIn className="ico" />
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="bottom-footer-text">
          <p>
            OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha. +91
            7205883336
          </p>
        </div>
        <div className="bottom-footer-icon">
          <i className="bottom-footer-icons">Presented by</i>
          <div className="bottom-footer-icons">
            <img
              src={zairzaLogo}
              alt=""
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
