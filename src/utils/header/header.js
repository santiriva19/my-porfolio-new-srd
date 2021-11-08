import classes from './header.module.scss';

export default function Header(){
    return(
        <div id="my_header" className={classes["container"]}>
            <div className={classes["img_logo"]}>

            </div>
            <nav id="my_nav">
                <p 
                className={ window.location.pathname === "/home" ? classes["active_white"] : "" }
                onClick={()=> window.location.href="/home"}
                >
                    Home
                </p> 
                <p 
                className={ window.location.pathname === "/my-work" ? classes["active_white"] : "" }
                onClick={()=> window.location.href="/my-work"}
                >
                    My Work
                </p> 
                <p 
                className={ window.location.pathname === "/contact" ? classes["active_black"] : "" }
                onClick={()=> window.location.href="/time"}

                >
                    Contact
                </p> 
            </nav>
        </div>
    )
}
