import MeComponent from "./containers/me/me";
import classes from './App.module.scss'
import Header from "./utils/header/header";
function App() {
  return (
    <div className={classes["container"]}>
        <Header/>
        <MeComponent/>
    </div>
  );
}

export default App;
