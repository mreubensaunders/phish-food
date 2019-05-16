import React, {useEffect, useState} from 'react';
import Anime from 'react-anime';

export default function LoadingAlt() {    
    // const [count, setCount] = useState(0);    

    // useEffect(() => {
    //     console.log(count)
    // })

    let loopBegan = 0;
    let loopCompleted = 0;

    let animeProps = {                
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: '',
        loop: true
    }

    return(        
        // <div className="tc pv4 pv3-ns">
            <Anime  {...animeProps}>
            <div className="rs-load"></div>
            </Anime>          
        // </div>
    )
}