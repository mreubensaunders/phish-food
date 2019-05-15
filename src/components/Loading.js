import React, {useEffect, useState} from 'react';
import Anime from 'react-anime';

export default function Loading() {    
    // const [count, setCount] = useState(0);    

    // useEffect(() => {
    //     console.log(count)
    // })

    return(
        <div>
            <Anime delay={(e, i) => i * 100}
            scale={[.1, 1]}>
                <i class="fas fa-circle-notch"></i>
            </Anime>
        </div>
    )
}