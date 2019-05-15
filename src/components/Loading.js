import React, {useEffect, useState} from 'react';
import Anime from 'react-anime';

export default function Loading() {    
    // const [count, setCount] = useState(0);    

    // useEffect(() => {
    //     console.log(count)
    // })

    return(
        <div className="tc pv4 pv3-ns">
            <Anime rotate={360} duration={1000} loop={true} easing={'easeInOutExpo'}>
                <i class="fas fa-circle-notch"></i>
            </Anime>
            <p className="black-50 fs-">This server can take a minute to wake up</p>            
        </div>
    )
}