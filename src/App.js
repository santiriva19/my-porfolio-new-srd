import React, {useEffect} from 'react';
import MeComponent from "./containers/me/me";
import classes from './App.module.scss'
import Header from "./utils/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import './global.css'
import WorkComponent from './containers/work/work';
import Footer from './utils/footer/footer';

export default function App(){
  useEffect(() => {
    window.onscroll = function() {
      onScrollFunction();
      
    };
  }, []);
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
  return(
    <div id="my_app" className={classes["container"]}>
      {renderWorkBackground()}
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