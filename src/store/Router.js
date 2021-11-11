import React, {useEffect} from 'react';
import MeComponent from "../containers/me/me";
import classes from './Router.module.scss'
import Header from "../utils/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import '../global.css'
import WorkComponent from '../containers/work/work';
import Footer from '../utils/footer/footer';
import Slider from '../components/work/slider-images/slider-image';
import { connect } from 'react-redux';

function App(props){
  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
]
  useEffect(() => {
    window.onscroll = function() {
      onScrollFunction();
    };
    document.addEventListener('keydown', function(event){
      if(event.key === "Escape"){
        props.onModalShowFalse();
      }
    });
  }, [props]);
  const onScrollFunction = () => {
    if(window.pageYOffset > 80) {
      document.getElementById("my_header").style.cssText= " animation: scale_header_in 0.5s ease; height: 60px; background-color: rgba(52, 52, 52, 0.77); border: none;"
    } else {
      document.getElementById("my_header").style.cssText= "animation: scale_header_out 0.5s ease; height: 100px; background-color: transparent; border: 1px solid white; "
    }
  }
  const renderWorkBackground = () => {
    if(window.location.pathname === "/my-work") {
      return(
        <>
          <div data-speed= "2" className={classes["bg_1"]+ " layer"} />
          <div data-speed= "1" className={classes["bg_2"]+ " layer"} />
        </>
      )
    }
  }
  const renderSliderComponent = () => {
    if(props.showModalWork) {
        return(
            <div className={classes["container_slider"]}>
              <div className={classes["container_button_esc"]}>
                <input
                  id="esc_button_id"
                  type="button"
                  value="X"
                  className={classes["button_escape"]}
                  onClick={()=> props.onModalShowFalse()}
                />
                <label> ESC </label>
              </div>
              <Slider 
              heading="Example Slider" 
              slides={slideData} 
              />
            </div>
        )
    } else  {
        return null;
    }
  }
  return(
      <div id="my_app" className={classes["container"]}>
        {renderWorkBackground()}
        {renderSliderComponent()}
        <Header/>
        <Router>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            >
            <Route exact path="/home" component={MeComponent} />
            <Route exact path="/my-work" component={WorkComponent} />
          </AnimatedSwitch>
        </Router>
        <Footer/>
      </div>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(App);