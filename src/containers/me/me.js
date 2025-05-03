import IntroducingMS from "../../components/me/introduce-myself/myself";
import classes from "./me.module.scss";
import TimeLineComponent from "../../components/me/timeline/timeline";

function MeComponent() {
  return (
    <section id="home" className={classes["cointainer"]}>
      <IntroducingMS />
      <TimeLineComponent />
    </section>
  );
}

export default MeComponent;
