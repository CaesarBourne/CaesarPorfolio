import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

let date = new Date();
let year = date.getFullYear();
export const FooterList = [
  {
    class: "center-text",
    children: (
      <h3 className="footer-text">
        Developed and integrated by Emmanuel Adeleke
      </h3>
    ),
  },
  {
    class: "center-text",
    children: <h3 className="footer-text">copyright © {year}</h3>,
  },
  {
    class: "center-text",
    children: (
      <ul className="foot-icon">
        <li key={1} className="media-social">
          <a
            href="https://github.com/CaesarBourne"
            className="whitecol"
            target="_blank"
            rel="noopenrr noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li key={2} className="media-social">
          <a
            href="https://www.linkedin.com/in/emmanuel-adeleke-296249117/"
            className="whitecol"
            target="_blank"
            rel="noopenrr noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li key={3} className="media-social">
          <a
            href="https://www.instagram.com/caesar505"
            className="whitecol"
            target="_blank"
            rel="noopenrr noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    ),
  },
];
