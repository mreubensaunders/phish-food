import React, {useState} from 'react';

function ThemeSwitch({clicked}){

    const [active, setActive] = useState('');


    return(
        <div onClick={() => {console.log()}} className="selector"></div>
    )
}

export default ThemeSwitch;