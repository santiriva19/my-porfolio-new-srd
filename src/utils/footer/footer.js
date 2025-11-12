import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./footer.module.scss";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/santiago-rivadeneira-delgado-209bbb20b/",
      icon: faLinkedin,
      label: "Visit Santiago Rivadeneira's LinkedIn profile"
    },
    {
      name: "GitHub",
      url: "https://github.com/santiriva19",
      icon: faGithub,
      label: "Visit Santiago Rivadeneira's GitHub profile"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyPress = (e, url) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSocialClick(url);
    }
  };

  return (
    <footer className={classes["container"]} role="contentinfo">
      <nav 
        className={classes["container_info"]}
        aria-label="Social media links"
      >
        {socialLinks.map((link) => (
          <button
            key={link.name}
            className={classes["bubble_contact"]}
            onClick={() => handleSocialClick(link.url)}
            onKeyPress={(e) => handleKeyPress(e, link.url)}
            aria-label={link.label}
          >
            <FontAwesomeIcon 
              color="white" 
              icon={link.icon}
              aria-hidden="true"
            />
            <span className="sr-only">{link.name}</span>
          </button>
        ))}
      </nav>
      <div className={classes["container_rights"]}>
        <p>Designed and programmed by Santiago Rivadeneira Delgado</p>
        <p>
          <span aria-label="Copyright">&#169;</span> All rights reserved
        </p>
      </div>
    </footer>
  );
}
