import classes from './section-work.module.scss'
import '../../../global.css';
import { useEffect } from 'react';
import { faImages, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

function SectionWork( { element, onModalShowTrue } ) {
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

    const columnImgBrush = (direction) => {
        return(
            <div className={classes["col_picture"]}>
                <div data-speed= "0.5" className={`${classes[direction === 'right' ? "img_brush_1" : "img_brush_2"]} scroll-element js-scroll fade-in-right ${direction === 'right' ? 'fade-in-left' : 'fade-in-right'} `}>
                    { element.images_description.map((image, indexImg) => {
                        const speedParallax = 0.15*indexImg+0.3;
                        return(
                                <div data-speed={`${speedParallax}`} className={`${classes[direction === "right" ? "square_img_type_right_"+indexImg : "square_img_type_left_"+indexImg]} ${classes["img_description"]} js-scroll layer`} style={{backgroundImage: `url(${image})`}} />                        
                            )
                    }) }
                </div>
            </div>
        )
    }

    const columnInfoWork = (direction) => {
        return(
            <div data-speed= "0.5" className={`${classes["col_description"]} scroll-element js-scroll ${direction === 'right' ? 'fade-in-right' : 'fade-in-left'}`}>
                <h1>
                    {element.title}
                </h1>
                <p>
                    {element.description} 
                </p>
                <div className={classes["row_buttons"]+" "+classes[direction === 'right' ? "row_odd" : "row_even"]}>
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
                    onClick={()=> onModalShowTrue() }
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
        )
    }

    return (
        <section id={element.href} className={classes["row"]+" scroll-container"}>
            {element.direction !== "right" ?  columnInfoWork(element.direction) : columnImgBrush(element.direction)}
            {element.direction !== "right" ? columnImgBrush(element.direction) : columnInfoWork(element.direction)}
        </section>
    )
}
const mapStateToProps = (state) => {
    return({
        showModalWork: state.showModalWork,
    });
}
const mapDispatchToProps = (dispatch) => {
    return{
        onModalShowTrue: () => dispatch({ type: "MODAL_IMAGES_TRUE" }),
        onModalShowFalse: () => dispatch({ type: "MODAL_IMAGES_FALSE" }),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionWork);