import classes from './section-work.module.scss'
import '../../../global.css';
import { useEffect } from 'react';
import { faImages, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SectionWork(props) {
    useEffect(() => {
        window.addEventListener("mousemove", parallax);
      }, []);
    
      const parallax = (e) => {
        document.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerHeight - e.pageX * speed)/100;
            const y = (window.innerHeight - e.pageY * speed)/100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
      }
    return ( props.element.direction !== "right" ? 
        <section id={props.element.href} className={classes["row"]+" scroll-container"}>
            <div data-speed= "0.5" className={`${classes["col_description"]} scroll-element js-scroll fade-in-left`}>
                <h1>
                    {props.element.title}
                </h1>
                <p>
                    {props.element.description} 
                </p>
                <div className={classes["row_buttons"]+" "+classes["row_odd"]}>
                    <div
                    value="Visit web site"
                    className={classes["button_redirect_white"]}
                    >
                        <FontAwesomeIcon 
                            icon={faMousePointer}
                            className={classes["icon_button_white"]}
                            size="2x"
                        />
                        <p>Go visit</p>
                    </div>
                    <div
                    value="Visit web site"
                    className={classes["button_redirect_black"]}
                    >
                        <FontAwesomeIcon 
                            className={classes["icon_button_black"]}
                            icon={faImages}
                            size="2x"
                        />
                        <p>Gallery</p>
                    </div>
                </div>
            </div>
            <div className={classes["col_picture"]}>
                <div data-speed= "0.5" className={`${classes["img_brush_1"]} scroll-element js-scroll fade-in-right`}>
                </div>
            </div>
        </section> 
        :
        <section id={props.element.href} className={classes["row"]+" scroll-container"}>
            <div className={classes["col_picture"]}>
                <div data-speed= "1" className={`${classes["img_brush_2"]} scroll-element js-scroll fade-in-left`}>

                </div>
            </div>  
            <div 
            data-speed= "0.8"
            className={`${classes["col_description"]} scroll-element js-scroll fade-in-right`}
            >
                <h1>
                    {props.element.title}
                </h1>
                <p>
                    {props.element.description} 
                </p>
                <div className={classes["row_buttons"]+" "+classes["row_even"]}>
                    <div
                    value="Visit web site"
                    className={classes["button_redirect_white"]}
                    >
                        <FontAwesomeIcon 
                            icon={faMousePointer}
                            className={classes["icon_button_white"]}
                            size="2x"
                        />
                        <p>Go visit</p>
                    </div>
                    <div
                    value="Visit web site"
                    className={classes["button_redirect_black"]}
                    >
                        <FontAwesomeIcon 
                            className={classes["icon_button_black"]}
                            icon={faImages}
                            size="2x"
                        />
                        <p>Gallery</p>
                    </div>
                </div>
            </div>
        </section>
       
    )
}