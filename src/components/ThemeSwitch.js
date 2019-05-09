import React, {useState, useEffect} from 'react';

function ThemeSwitch(){

    const LIGHT = "light";
    const DARK = "dark";
    const [theme, setTheme] = useState(LIGHT);

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
            <div className={theme === LIGHT ? 'selector active-theme' : 'selector'} onClick={() => {setTheme(LIGHT)}}></div>
            <div className={theme === DARK ? 'selector active-theme' : 'selector'}  onClick={() => {setTheme(DARK)}}></div>
        </div>
    )
}

export default ThemeSwitch;