
import IntroducingMS from '../../components/me/introduce-myself/myself';
import classes from './me.module.scss';
import TimeLineComponent from '../../components/me/timeline/timeline';

function MeComponent() {
  return (
    <div className={classes["cointainer"]}>
        <IntroducingMS/>
        <TimeLineComponent/>
    </div>
  );
}

export default MeComponent;
