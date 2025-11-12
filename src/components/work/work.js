import classes from './work.module.scss';
import '../../global.css';
import SectionWork from './section-work/section-work';
import data from './data-work/data.json';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollAnimation } from '../../hooks/useScrollEffect';

function Work() {
    useScrollAnimation('.js-scroll', 1.3);

    const scrollToProject = (href) => {
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCardKeyPress = (e, href) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToProject(href);
        }
    };
   
    return (
        <div className={classes["container"]}>
            <section id="home-work" className={classes["container_title"]}>
                <h1>A taste of my work</h1> 
                <div className={classes["container_cards"]}>
                    {data.map((element, index) => {
                        return(
                            <article 
                                key={index} 
                                className={classes["card"]}
                                onClick={() => scrollToProject(element.href)}
                                onKeyPress={(e) => handleCardKeyPress(e, element.href)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View ${element.title} project details`}
                            >
                                <div className={classes["card_img"]}>
                                    <img 
                                        src={element.thumbnail} 
                                        alt={`${element.title} project thumbnail`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={classes["card_title"]}>
                                    <FontAwesomeIcon 
                                        icon={faCircle} 
                                        className={classes["icon_circle"]}
                                        aria-hidden="true"
                                    />
                                    <h3>{element.title}</h3>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <p className={classes["p_scroll"]} aria-label="Scroll down to see detailed project information"> 
                    <span className={classes["arrow_dowwn_1"]} aria-hidden="true">&#x2935;</span> 
                    <span className={classes["arrow_dowwn_2"]} aria-hidden="true">&#x2935;</span> 
                    <span className={classes["arrow_dowwn_1"]} aria-hidden="true">&#x2935;</span> 
                    {" "}Scroll down to see my work{" "}
                    <span className={classes["arrow_dowwn_1"]} aria-hidden="true">&#x2935;</span> 
                    <span className={classes["arrow_dowwn_2"]} aria-hidden="true">&#x2935;</span> 
                    <span className={classes["arrow_dowwn_1"]} aria-hidden="true">&#x2935;</span> 
                </p>
            </section>   
            {
                data.map((element, index) => {
                    return(
                        <SectionWork 
                            key={index} 
                            element={element}
                        />  
                    )
                })
            }
        </div>
    );
}

export default Work;
