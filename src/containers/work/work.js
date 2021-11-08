import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import Work from '../../components/work/work';
import classes from './work.module.scss';

function WorkComponent() {
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
  return (
    <div className={classes["container"]}>
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

export default WorkComponent;
