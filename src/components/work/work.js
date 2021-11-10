import classes from './work.module.scss';
import '../../global.css';
import SectionWork from './section-work/section-work';
import data from './data-work/data.json';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Work() {
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    };
    const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    };
    const handleScrollAnimation = () => {
        const scrollElements = document.querySelectorAll(".js-scroll"); 

        scrollElements.forEach((el) => {
            if (elementInView(el, 2)) {
            displayScrollElement(el);
            } else if (elementOutofView(el)) {
            hideScrollElement(el)
            }
        })
    }
    window.addEventListener("scroll", () => { 
        handleScrollAnimation();
    });
   
    return (
        <div className={classes["container"]}>
            <section id="home-work" className={classes["container_title"]}>
                <h1> A taste of my work </h1> 
                <div className={classes["container_cards"]}>
                    {data.map((element, index) => {
                        return(
                            <div 
                            key={index} 
                            className={classes["card"]}
                            onClick={()=> window.location.href= `#${element.href}` }
                            >
                                <div className={classes["card_img"]}>
                                    <img src={element.thumbnail} alt="img" />
                                </div>
                                <div className={classes["card_title"]}>
                                    <FontAwesomeIcon 
                                    icon={faCircle} 
                                    style={{ fontSize: 10, paddingRight: '2%' }}
                                    />
                                    <h3>{element.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className={classes["p_scroll"]} style={{marginTop: "1%"}}> 
                    <span className={classes["arrow_dowwn_1"]}>&#x2935;</span> 
                    <span className={classes["arrow_dowwn_2"]}>&#x2935;</span> 
                    <span className={classes["arrow_dowwn_1"]}>&#x2935;</span> 
                    {" "}Scroll down to see my work 
                    <span className={classes["arrow_dowwn_1"]}>&#x2935;</span> 
                    <span className={classes["arrow_dowwn_2"]}>&#x2935;</span> 
                    <span className={classes["arrow_dowwn_1"]}>&#x2935;</span> 
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
