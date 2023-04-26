import React from "react";
import gh from "../assets/gh.png"
import linkedin from "../assets/linkedin.png"
import styles from "./Styles/Footer.module.css"


const Footer = () => {
  return (
    <footer>
      <div className={styles.divGeneral}>
        <div >
          <p className={styles.plink}>
            <a href="https://ondev.vercel.app/" target="_blank" className={styles.atext}>
              Desarrollado por ONDev
            </a>
          </p>
        </div>

        <div className={styles.div}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="https://github.com/Nicovied0" target="_blank">
                <img
                  src={gh}
                  alt="imgGithub"
                  width={30}
                  height={30}
                  className={styles.img}
                />
              </a>
            </li>
            <li className={styles.li}>
              <a
                href="https://www.linkedin.com/in/nicoboviedo/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="imgLiIn"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
