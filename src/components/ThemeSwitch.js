import React, {useState, useEffect} from 'react';
import { useStateValue  } from '../AppState';

function ThemeSwitch(){    

    const LIGHT = "white";
    const DARK = "black";
    //const [theme, setTheme] = useState(LIGHT);
    const [{ theme }, dispatch] = useStateValue();


    //today todo
    //make theme switcher
    //get resi2? or cheaper game
    //gym
    //Sunday
    //
    //
    useEffect(()=>{
        console.log(theme);            
        //call reducer here or summin
    })

    return(        
        <div className="theme-switch">                
            <div className={theme.primary === LIGHT ? 'selector active-theme' : 'selector'} onClick={() => dispatch({
                type: 'changeTheme',
                newTheme: { primary: LIGHT}
              })}></div>
            <div className={theme.primary === DARK ? 'selector active-theme' : 'selector'}  onClick={() => dispatch({
                type: 'changeTheme',
                newTheme: { primary: DARK}
              })}></div>            
        </div>
    )
}

export default ThemeSwitch;