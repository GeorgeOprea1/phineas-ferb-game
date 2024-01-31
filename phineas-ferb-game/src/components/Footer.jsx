import "../styles/Footer.css";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import phineas from "../assets/phineas.png";

const Footer = ({
  toggleInfo,
  toggleMusic,
  toggleVolume,
  info,
  volumeOn,
  musicdOn,
}) => {
  return (
    <div className="footer-container">
      <div className="sound-section">
        <button id="footer-btns" onClick={toggleVolume}>
          {volumeOn ? (
            <IoVolumeMediumSharp className="icon" />
          ) : (
            <IoVolumeMute className="icon" />
          )}
        </button>
        <button id="footer-btns" onClick={toggleMusic}>
          {musicdOn ? (
            <MdMusicNote className="icon" />
          ) : (
            <MdMusicOff className="icon" />
          )}
        </button>
      </div>
      <div className="github-container">
        <p className="para-footer">All rights reserved George Oprea 2024</p>
        <a
          href="https://github.com/GeorgeOprea1/phineas-ferb-game"
          aria-label="check out the github repo"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
      </div>
      <div className="instruction">
        {info ? (
          <div className="info-container slide-up">
            <h1 className="info-header">
              Don&apos;t click on the same card twice!
            </h1>
            <h2 className="info-header">
              Click on Phineas and Ferb logo to go back
            </h2>
            <img
              src={phineas}
              alt="Phineas"
              width="200px"
              className="info-img"
            />
          </div>
        ) : (
          ""
        )}

        {info ? (
          <button onClick={toggleInfo} id="footer-btns" className="ask">
            <IoClose className="icon ask" />
          </button>
        ) : (
          <button onClick={toggleInfo} id="footer-btns" className="ask">
            <FaQuestion className="icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
