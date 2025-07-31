import { useRef } from "react";
import Face from "../assets/images/Face.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "animate.css";

function Header() {
  const h1Ref = useRef(null);

  const animateCSS = (element, animation, prefix = "animate__") => {
    return new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      element.classList.add(`${prefix}animated`, animationName);

      function handleAnimationEnd(event) {
        event.stopPropagation();
        element.classList.remove(`${prefix}animated`, animationName);
        resolve("Animation ended");
      }

      element.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });
    });
  };

  const handleClick = () => {
    if (h1Ref.current) {
      animateCSS(h1Ref.current, "hinge");
    }
  };

  return (
    <div>
      <img src={Face} alt="selfie" className="h-100 rounded-[80%] hover:border-4 justify-center" />
      {/* onclick to change image to a different one maybe */}
      <div>
        <h1 ref={h1Ref} onClick={handleClick} className="hover:cursor-pointer">Colby Capraun</h1>
        {/* <FontAwesomeIcon  /> */}
        <a
          href="mailto:colbycapraun@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          colbymclaincapraun@gmail.com
        </a>
        <FontAwesomeIcon icon={faGithub} />
        <a
          href="https://github.com/Blackhawk56210"
          target="_blank"
          rel="noopener noreferrer">
          Github profile
        </a>
        <FontAwesomeIcon icon={faLinkedin} />
        <a
          href="https://www.linkedin.com/in/colby-capraun-a42ba0264/"
          target="_blank"
          rel="noopener noreferrer">
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Header;