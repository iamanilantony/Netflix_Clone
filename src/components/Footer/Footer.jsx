import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="socialmedia">
          <Facebook className="iconis" />
          <Instagram className="iconis" />
          <Twitter className="iconis" />
          <YouTube className="iconis" />
        </div>
        <div className="footer_cont">
          <div className="footer_content">
            <span>Audio&Subtitles</span>
            <span>Media Centre</span>
            <span>Privacy</span>
            <span>Contact US</span>
            <button>Service Code</button>
          </div>
          <div className="footer_content">
            <span>Audio&Subtitles</span>
            <span>Media Centre</span>
            <span>Privacy</span>
          </div>
          <div className="footer_content">
            <span>Audio&Subtitles</span>
            <span>Media Centre</span>
            <span>Privacy</span>
          </div>
          <div className="footer_content">
            <span>Audio&Subtitles</span>
            <span>Media Centre</span>
            <span>Privacy</span>
          </div>
        </div>
        <span className="footer_Sentence">1997-2022 Netflix Inc </span>
      </div>
    </div>
  );
}

export default Footer;
