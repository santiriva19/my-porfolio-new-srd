import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import Slider from '../../components/work/slider-images/slider-image';
import Work from '../../components/work/work';
import classes from './work.module.scss';
import { connect } from 'react-redux';

function WorkComponent(props) {
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
    document.getElementById("bubble_back_top").style.cssText= "display: none"
  }, []);
  window.addEventListener("scroll", () => { 
    onScrollFunction();
  });
  const onScrollFunction = () => {
    if(window.pageYOffset > 350) {
      document.getElementById("bubble_back_top").style.cssText= "display: flex !important;"
    } else {
      document.getElementById("bubble_back_top").style.cssText= "display: none;"
    }
  }
  const renderSliderComponent = () => {
    if(props.showModalWork) {
        return(
            <div className={classes["container_slider"]}>
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
  return (
    <div className={classes["container"]}>
      {renderSliderComponent()}
      <Work/>
      <div 
      id="bubble_back_top" 
      className={classes["bubble_back_up"]}
      onClick={()=> window.location.href= "#home-work"}
      >
          <FontAwesomeIcon icon={faArrowUp} color="black" />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WorkComponent);