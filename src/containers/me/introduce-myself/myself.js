import classes from './myself.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function IntroducingMS() {
    const buttonsSocial= [
        {
            index: 0,
            name: "Linkedin",
            link: "https://www.linkedin.com/in/santiago-rivadeneira-delgado-209bbb20b/"
        },
        {
            index: 1,
            name: "Instagram",
            link: "https://www.instagram.com/lotocode/?hl=es"
        },
        {
            index: 2,
            name: "GitHub",
            link: "https://github.com/santiriva19"
        },
    ]
  return (
    <div className={classes["container"]}>
        <div className={classes["column_picture"]}>
            
        </div>
        <div className={classes["column_info"]}>
            <h1>Santiago Rivadeneira</h1>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. 
            </p>
            <div className={classes["cont_buttons_social"]}>
                { buttonsSocial.map((element) => {
                    return(
                        <div 
                        className={classes["button_redirect"]}
                        onClick={()=> {
                            window.open(element.link, "_blank")
                        }}
                        >
                            <FontAwesomeIcon icon={
                                element.index === 0 ? faLinkedinIn : element.index === 1 ? faInstagram : faGithub 
                            } 
                            color={
                                element.index === 0 ? "rgb(55, 142, 255)" : element.index === 1 ? "#ff33b4" : "white" 
                            }
                            className={classes["icons_social"]}
                            />
                            <p>{element.name}</p>
                        </div>
                    )
                }) 
                }
            </div>
        </div>
    </div>
  );
}

export default IntroducingMS;
